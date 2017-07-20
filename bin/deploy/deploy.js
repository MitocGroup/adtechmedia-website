#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const AWS = require('aws-sdk');

AWS.config.credentials = new AWS.EnvironmentCredentials('AWS');
const route53 = new AWS.Route53();

const appPath = path.join(__dirname, '../../');
const srcPath = path.join(appPath, 'src');

function _deepifyInstall() {
  return new Promise((resolve, reject) => {
    exec(`cd ${srcPath} && deepify install --loglevel=debug && cd ${appPath}`, (error, stdout) => {
      if (error) {
        return reject(error);
      }

      console.log(stdout);
    });
  });
}

_deepifyInstall();
