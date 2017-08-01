#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const bucket = 'atm-deploy-caches';
const prefix = 'atm-website';
const appPath = path.join(__dirname, '../../');
const cacheDir = path.join(process.env.HOME, '.npm_lazy');
const configPath = path.join(appPath, 'npm_lazy.config.js');

process.on('message', (event) => {
  switch(event.name) {
    case 'get-config': getConfig(); break;
    case 'configure': configure(); break;
    case 'run-registry': runRegistry(); break;
    case 'exit': process.exit(0); break;
  }
});

/**
 * Build and send config object
 */
function getConfig() {
  process.send({
    cacheDir: cacheDir,
    configPath: configPath,
    pullCommand: `aws s3 sync s3://${bucket}/${prefix} ${cacheDir}`,
    pushCommand: `aws s3 sync ${cacheDir} s3://${bucket}/${prefix} --delete`
  });
}

/**
 * Run local npm registry
 */
function runRegistry() {
  const childCmd = spawn(`npm_lazy --config ${configPath}`, { shell: true, cwd: appPath });

  childCmd.stdout.on('data', data => {
    console.log(data.toString());
  });

  childCmd.stderr.on('data', error => {
    console.error(error.toString());
  });
}

/**
 * Configure local registry for environment
 */
function configure() {
  if (!fs.existsSync(cacheDir)){
    fs.mkdirSync(cacheDir);
  }

  fs.writeFileSync(
    configPath,
    `module.exports = {
      loggingOpts: { 
        logRequesterIP: true,
        logToConsole: true
      },
      readOnly: ${(process.env.DEPLOY_ENV === 'test')},
      cacheDirectory: '${cacheDir}',
      cacheAge: 0,
      httpTimeout: 4000,
      maxRetries: 2,
      externalUrl: 'http://localhost:8080',
      remoteUrl: 'https://registry.npmjs.com/',
      port: 8080,
      host: '0.0.0.0',
      proxy: {}
    };`
  );
}
