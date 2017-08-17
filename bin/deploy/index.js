#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const AwsHelper = require('../helpers/aws');
const { fork } = require('child_process');
const { runChildCmd, findProvisioningFile } = require('../helpers/utils');
const { compileMicroservice, cacheMicroserviceLambdas } = require('./compile');

const deepifyRegexp = /\d{2}:\d{2}:\d{2}/;
const microAppName = 'adtechmedia-website';
const env = process.env.DEPLOY_ENV || 'test';
const appPath = path.join(__dirname, '../../');
const srcPath = path.join(appPath, 'src');
const logPath = path.join(appPath, 'docs/deploy.log');
const awsh = new AwsHelper('atm-deploy-assets');
const forked = fork('bin/deploy/cache.js', { cwd: appPath });
const timerId = setInterval(() => { console.log('.'); }, 60000);

let newAppInfo = {};
let cacheInfo = {};

/* Start continuous deployment script */

isEnvironmentLocked().then(isLocked => {
  if (isLocked) {
    console.log('Environment is locked, skipping deploy');
    exit(1);
  }

  console.log('Locking environment');
  return awsh.putS3Object(getLockFileKey());

}).then(() => {

  console.log('Initializing node-modules cache');
  return getCacheConfig().then(cache => {
    cacheInfo = cache;

    return warmUpModulesCache(cacheInfo);
  });

}).then(() => {

  console.log('Installing DEEP microservice');
  return runChildCmd(`cd ${srcPath} && deepify install`, deepifyRegexp);

}).then(() => {

  console.log('Updating deeploy.json');
  updateDeeployJson();

  console.log('Updating .parameters.json');
  return awsh.getAndSaveS3Object(
    `atm-website/${env}/.parameters.json`, `${srcPath}/adtechmedia-website/.parameters.json`
  );

}).then(() => {

  console.log('Compiling backend');
  return compileMicroservice(microAppName);

}).then(() => {

  console.log('Deploying application');
  return runChildCmd(`cd ${srcPath} && DEEP_CONFIRMATION_REFUSE=1 deepify deploy`, deepifyRegexp).then(() => {
    newAppInfo = getNewApplicationInfo();
    return Promise.resolve();
  });

}).then(() => {

  console.log('Mark old distributions with REMOVE mark');
  console.log('Waiting freshly deployed CloudFront will get status deployed');
  let promises = [awsh.waitForDistributionIsDeployed(newAppInfo.cloudfrontId)];

  return getOldDistributionIds().then(ids => {
    promises.push(ids.map(id => {
      return handleOldDistribution(id);
    }));

    return Promise.all(promises);
  });

}).then(() => {

  console.log('Configuring freshly deployed CloudFront');
  return configureNewDistribution();

}).then(() => {

  console.log('Repointing Route53 to a freshly deployed CloudFront');
  return awsh.getResourceRecordByName(getDomain()).then(recordSet => {
    recordSet.ResourceRecords[0].Value = newAppInfo.cloudfrontDomain;
    return awsh.updateResourceRecord(recordSet);
  });

}).then(() => {

  console.log('Checkout to dev branch');
  return runChildCmd('git checkout . && git checkout dev && git pull origin dev', /.*Switched.*/);

}).then(() => {

  console.log('Updating deploy.log');
  updateDeployLog();

  console.log('Committing deploy.log changes');
  return runChildCmd(`git commit -m "#ATM continuous deployment logger [skip ci]" -- ${logPath}`, /.*#ATM.*/);

}).then(() => {

  console.log('Pushing deploy.log changes');
  return runChildCmd('git push origin dev');

}).then(() => {

  console.log('Caching node_modules & lambdas');
  let promises = [cacheMicroserviceLambdas(microAppName)];

  if (env === 'test') {
    promises.push(runChildCmd(cacheInfo.pushCommand, /^-$/));
  }

  return Promise.all(promises);

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
    return row.Env === env;
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
 * Update deeploy.json with aws credentials
 */
function updateDeeployJson() {
  const deeployPath = path.join(srcPath, 'deeploy.json');

  if (fs.existsSync(deeployPath)) {
    let deeploy = require(deeployPath);

    deeploy.env = env;
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
 * Assign alias and certificate for cloudfront
 * @returns {Promise}
 */
function configureNewDistribution() {
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
}


/**
 * Update deploy log with freshly deployed cloudfront info
 */
function updateDeployLog() {
  const date = new Date().toISOString();
  let logRows = fs.readFileSync(logPath).toString().split('\n');

  logRows.unshift(
    `[${date}] Env: ${env}, Id: ${newAppInfo.cloudfrontId}, Domain: ${newAppInfo.cloudfrontDomain}, Hash: ${newAppInfo.appHash}`
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
 * Configure and prepare cache
 * @param config
 * @returns {Promise}
 */
function warmUpModulesCache(config) {
  const configure = new Promise(resolve => {
    forked.send({ name: 'configure' });
    setTimeout(() => { resolve(); }, 1000);
  });

  return configure.then(() => {
    if (env !== 'test') {
      return runChildCmd(config.pullCommand, /^-$/);
    }

    return Promise.resolve();
  }).then(() => {
    forked.send({ name: 'run-registry' });
    return Promise.resolve();
  });
}

/**
 * Get cache config
 * @returns {Promise}
 */
function getCacheConfig() {
  return new Promise((resolve, reject) => {
    forked.send({ name: 'get-config' });

    forked.on('message', data => {
      return resolve(data);
    });

    forked.on('exit', error => {
      return reject(error);
    });
  });
}

/**
 * Get domain url for environment
 * @returns {string}
 */
function getDomain() {
  return (env !== 'master') ? `www-${env}.adtechmedia.io` : 'www.adtechmedia.io';
}

/**
 * Get lock file s3 key
 * @returns {string}
 */
function getLockFileKey() {
  return `atm-website/${env}/travis.lock`;
}

/**
 * Garbage collection
 * @param code
 */
function exit(code) {
  forked.send({ name: 'exit' });
  forked.kill('SIGINT');
  clearInterval(timerId);
  process.exit(code);
}
