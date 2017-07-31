#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const AwsHelper = require('./aws-helper');

const appPath = path.join(__dirname, '../../');
const srcPath = path.join(appPath, 'src');
const logPath = path.join(appPath, 'docs/deploy.log');
const awsh = new AwsHelper();
const timerId = setInterval(() => {
  console.log('.');
}, 60000);

let newAppInfo = {};

/* Start continuous deployment script */

isEnvironmentLocked().then(isLocked => {
  if (isLocked) {
    console.log('Environment is locked, skipping deploy');
    exit(1);
  }

  console.log('Locking environment');
  return awsh.putS3Object(getLockFileKey());

}).then(() => {

  console.log('Installing DEEP microservice');
  return runChildCmd(`cd ${srcPath} && deepify install`);

}).then(() => {

  console.log('Updating deeploy.json');
  updateDeeployJson();

  console.log('Updating .parameters.json');
  return awsh.getAndSaveS3Object(
    `atm-website/${process.env.DEPLOY_ENV}/.parameters.json`,
    `${srcPath}/adtechmedia-website/.parameters.json`
  );

}).then(() => {

  console.log('Deploying application');
  return runChildCmd(`cd ${srcPath} && deepify deploy`).then(() => {
    newAppInfo = getNewApplicationInfo();
    return Promise.resolve();
  });

}).then(() => {

  let promises = [];
  promises.push(awsh.waitForDistributionIsDeployed(newAppInfo.cloudfrontId));

  console.log('Mark old distributions with REMOVE mark');
  console.log('Waiting freshly deployed CloudFront will get status deployed');
  return getOldDistributionIds().then(ids => {
    promises.push(ids.map(id => {
      return handleOldDistribution(id);
    }));

    return Promise.all(promises);
  });

}).then(() => {

  console.log('Configuring freshly deployed CloudFront');
  return awsh.getDistributionById(newAppInfo.cloudfrontId).then(distInfo => {
    const id = distInfo.Distribution.Id;
    const etag = distInfo.ETag;
    const config = distInfo.Distribution.DistributionConfig;

    config.Aliases = {
      Quantity: 1,
      Items: [getDomain()]
    };
    config.ViewerCertificate = {
      SSLSupportMethod: 'sni-only',
      ACMCertificateArn: `arn:aws:acm:us-east-1:${process.env.AWS_ACCOUNT_ID}:certificate/${process.env.ATM_CERTIFICATE}`,
      MinimumProtocolVersion: 'TLSv1',
      Certificate: `arn:aws:acm:us-east-1:${process.env.AWS_ACCOUNT_ID}:certificate/${process.env.ATM_CERTIFICATE}`,
      CertificateSource: 'acm'
    };

    return awsh.updateDistributionAndWait(id, config, etag);
  });

}).then(() => {

  console.log('Repointing Route53 to freshly deployed CloudFront');
  return awsh.getResourceRecordByName(getDomain()).then(recordSet => {
    recordSet.ResourceRecords[0].Value = newAppInfo.cloudfrontDomain;
    return awsh.updateResourceRecord(recordSet);
  });

}).then(() => {

  console.log('Checkout to dev branch');
  return runChildCmd('git fetch origin dev && git checkout . && git checkout dev', true);

}).then(() => {

  console.log('Updating deploy.log');
  updateDeployLog();

  console.log('Committing deploy.log changes');
  return runChildCmd(`git commit -m "#ATM continuous deployment logger [skip ci]" -- ${logPath}`, true);

}).then(() => {

  console.log('Pushing deploy.log changes');
  return runChildCmd('git push origin dev', true);

}).then(() => {

  console.log('Deploy finished, releasing environment');
  awsh.deleteS3Object(getLockFileKey()).then(() => {
    exit(0);
  });

}).catch(error => {

  console.error(`Deployment failed: ${error}, releasing environment`);
  awsh.deleteS3Object(getLockFileKey()).then(() => {
    exit(1);
  });
});

/* End continuous deployment script */

/**
 * Handle old distribution and wait till is deployed
 * @param distId
 * @returns {Promise}
 */
function handleOldDistribution(distId) {
  return awsh.getDistributionById(distId).then(distInfo => {
    const id = distInfo.Distribution.Id;
    const etag = distInfo.ETag;
    const config = distInfo.Distribution.DistributionConfig;

    config.Comment = `REMOVE ${config.Comment}`;
    config.Aliases = {
      Items: [],
      Quantity: 0
    };

    return awsh.updateDistributionConfig(id, config, etag);
  });
}

/**
 * Get cloudfront IDs which should be marked for removal
 * @returns {Promise}
 */
function getOldDistributionIds() {
  let prevDistrIds = parseInfoFromLog().filter(row => {
    return row.Env === process.env.DEPLOY_ENV;
  }).map(item => item.Id);

  return awsh.getListOfActiveDistributions().then(result => {
    let activeDistIds = result.map(item => item.Id);

    return Promise.resolve(prevDistrIds.filter(prevId => {
      return activeDistIds.indexOf(prevId) !== -1;
    }));
  });
}

/**
 * Get deployed application data from provisioning file
 * @returns {{}}
 */
function getNewApplicationInfo() {
  const provisioning = findProvisioningFile();
  const distributionInfo = require(provisioning).provisioning.cloudfront;

  return {
    appHash: provisioning.split('.')[1],
    cloudfrontId: distributionInfo.id,
    cloudfrontDomain: distributionInfo.domain,
    provisioningPath: provisioning
  }
}

/**
 * Parse list of previously deployed builds
 * @returns {Array}
 */
function parseInfoFromLog() {
  let logPath = path.join(appPath, 'docs/deploy.log');
  let logRows = fs.readFileSync(logPath).toString().split('\n').filter(row => row.trim());

  return logRows.map(row => {
    let parts = /^\[(.+)\].?(.+)/ig.exec(row);
    let result = {
      Date: new Date(parts[1])
    };

    parts[2].split(',').forEach(part => {
      let keyValue = part.split(':').map(item => item.trim());
      result[keyValue[0]] = keyValue[1];
    });

    return result;
  });
}

/**
 * Find provisioning file path
 * @returns {*}
 */
function findProvisioningFile() {
  let files = fs.readdirSync(srcPath).filter(file => {
    return /^.([a-z0-9]+).([a-z]+).provisioning.json$/.test(file);
  });

  if (files.length <= 0) {
    throw 'Provisioning file was not found';
  }

  return path.join(srcPath, files[0]);
}

/**
 * Update deeploy.json with aws credentials
 */
function updateDeeployJson() {
  const deeployPath = path.join(srcPath, 'deeploy.json');

  if (fs.existsSync(deeployPath)) {
    let deeploy = require(deeployPath);

    deeploy.env = process.env.DEPLOY_ENV;
    deeploy.awsAccountId = process.env.AWS_ACCOUNT_ID;
    deeploy.aws = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_DEFAULT_REGION
    };

    fs.writeFileSync(deeployPath, JSON.stringify(deeploy));
  }
}

/**
 * Update deploy log with freshly deployed cloudfront info
 */
function updateDeployLog() {
  const date = new Date().toISOString();
  let logRows = fs.readFileSync(logPath).toString().split('\n');

  logRows.unshift(
    `[${date}] Env: ${process.env.DEPLOY_ENV}, Id: ${newAppInfo.cloudfrontId}, Domain: ${newAppInfo.cloudfrontDomain}, Hash: ${newAppInfo.appHash}`
  );
  fs.writeFileSync(logPath, logRows.join('\n'));
}

/**
 * Check if environment has concurrent deploys
 * @returns {Promise}
 */
function isEnvironmentLocked() {
  return new Promise((resolve, reject) => {
    awsh.getS3Object(getLockFileKey()).then(data => {
      const lastModified = data.LastModified;
      const diff = (new Date().getTime() - new Date(lastModified).getTime());
      const hoursDiff = Math.ceil(diff / (1000 * 60 * 60));

      if (hoursDiff < 24) {
        resolve(true);
      } else {
        awsh.deleteS3Object(getLockFileKey()).then(() => {
          resolve(false);
        });
      }
    }).catch(err => {
      (err.code === 'NoSuchKey') ? resolve(false) : reject(err);
    });
  });
}

/**
 * Run child shell command
 * @param cmd
 * @param verbose
 * @returns {Promise}
 */
function runChildCmd(cmd, verbose = false) {
  return new Promise((resolve, reject) => {
    const isVerbose = verbose;
    const childCmd = spawn(cmd, { shell: true });

    childCmd.stdout.on('data', data => {
      isVerbose ? console.log(data.toString()) : logOutput(data.toString());
    });

    childCmd.stderr.on('data', error => {
      isVerbose ? console.error(error.toString()) : logOutput(error.toString());
    });

    childCmd.on('exit', code => {
      return (code === 1) ? reject(code) : resolve(code);
    });
  });
}

/**
 * Print output (filtered)
 * @param str
 */
function logOutput(str) {
  const regExp = /\d{2}:\d{2}:\d{2}/;

  if (regExp.test(str)) {
    console.log(str.trim());
  }
}

/**
 * Get domain url for environment
 * @returns {string}
 */
function getDomain() {
  const env = process.env.DEPLOY_ENV || 'test';

  return (env !== 'master') ? `www-${env}.adtechmedia.io` : 'www.adtechmedia.io';
}

/**
 * Get lock file s3 key
 * @returns {string}
 */
function getLockFileKey() {
  const env = process.env.DEPLOY_ENV || 'test';

  return `atm-website/${env}/travis.lock`;
}

/**
 * Garbage collection
 * @param code
 */
function exit(code) {
  clearInterval(timerId);
  process.exit(code);
}
