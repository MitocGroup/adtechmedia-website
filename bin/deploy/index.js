#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const AwsHelper = require('./aws-helper');

const appPath = path.join(__dirname, '../../');
const srcPath = path.join(appPath, 'src');
const awsh = new AwsHelper();
const timerId = setInterval(() => {
  console.log('.');
}, 60000);

let newAppInfo = {};

/* Start continuous deployment script */

console.log('Installing DEEP microservice');
runChildCmd(`cd ${srcPath} && deepify install --loglevel=debug`).then(() => {

  console.log('Updating deeploy.json');
  updateDeeployJson();

  console.log('Updating .parameters.json');
  return awsh.getS3Object(`adtechmedia-website/${process.env.DEPLOY_ENV}/.parameters.json`).then(data => {
    fs.writeFileSync(path.join(srcPath, 'adtechmedia-website', '.parameters.json'), data.Body.toString());
    return Promise.resolve();
  });

}).then(() => {

  console.log('Deploying application');
  return runChildCmd(`cd ${srcPath} && deepify deploy --loglevel=debug`).then(() => {
    newAppInfo = getNewApplicationInfo();
    return Promise.resolve();
  });

}).then(() => {

  console.log('Configuring previously deployed CloudFronts');
  let promises = [];
  promises.push(awsh.waitForDistributionIsDeployed(newAppInfo.cloudfrontId));

  return getOldDistributionIds().then(ids => {
    promises.push(ids.map(id => {
      return handleOldDistribution(id);
    }));

    return Promise.all(promises)
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

    return awsh.updateDistributionConfig(id, config, etag);
  });

}).then(() => {

  console.log('Repointing Route53 to freshly deployed CloudFront');
  return awsh.getResourceRecordByName(getDomain()).then(recordSet => {
    recordSet.ResourceRecords[0].Value = newAppInfo.cloudfrontDomain;
    return awsh.updateResourceRecord(recordSet);
  });

}).then(() => {

  console.log('Updating deploy.log');
  updateDeployLog();
  console.log('Deploy finished.');
  clearInterval(timerId);

}).catch(error => {
  console.error('Continuous deployment failed: ', error);
  clearInterval(timerId);
  process.exit(1);
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
    let activeDostIds = result.map(item => item.Id);

    return Promise.resolve(prevDistrIds.filter(prevId => {
      return activeDostIds.indexOf(prevId) !== -1;
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
  let files = fs.readdirSync(srcPath);

  for (let i = 0; i < files.length; i++) {
    let filename = path.join(srcPath, files[i]);
    let stat = fs.lstatSync(filename);

    if (stat.isDirectory()) continue;

    if (/.provisioning.json$/.test(filename)) {
      return filename;
    }
  }

  throw 'Provisioning file was not found';
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
  const logPath = path.join(appPath, 'docs/deploy.log');
  let logRows = fs.readFileSync(logPath).toString().split('\n');

  logRows.unshift(
    `[${date}] Env: ${process.env.DEPLOY_ENV}, Id: ${newAppInfo.cloudfrontId}, Domain: ${newAppInfo.cloudfrontDomain}, Hash: ${newAppInfo.appHash}`
  );
  fs.writeFileSync(logPath, logRows.join('\n'));
}

/**
 * Run child shell command
 * @param cmd
 * @returns {Promise}
 */
function runChildCmd(cmd) {
  return new Promise((resolve, reject) => {
    const childCmd = spawn(cmd, { shell: true });

    childCmd.stdout.on('data', data => {
      console.log(data.toString());
    });

    childCmd.stderr.on('data', error => {
      console.error(error.toString());
    });

    childCmd.on('exit', code => {
      return (code === 1) ? reject(code) : resolve(code);
    });
  });
}

/**
 * Get domain url for environment
 * @returns {string}
 */
function getDomain() {
  const env = process.env.DEPLOY_ENV || 'test';

  return (env !== 'master') ? `www-${env}.adtechmedia.io` : 'www.adtechmedia.io';
}
