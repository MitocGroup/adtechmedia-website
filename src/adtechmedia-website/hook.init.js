/**
 * Created by mgoria on 9/15/16.
 */

'use strict';

/* eslint  max-len: 0, no-catch-shadow: 0 */

// @todo move it to config
var ATM_SW_URL = 'https://api-dev.adtechmedia.io/atm-core/atm-build/sw.js';
var ATM_SW_PATH = 'sw.js';
var ATM_NYT_RIBBON_PATH = 'assets/nyt-ribbon.html';
var SWAGGER_URL = 'https://mitocgroup.github.io/atm/api.swagger.yml';

var path = require('path');
var fs = require('fs');
var https = require('https');
var zlib = require('zlib');
var yaml = require('yamljs');

function walkDir(dir, filter, callback) {
  if (!fs.existsSync(dir)) {
    return;
  }

  let files = fs.readdirSync(dir);

  for (let i = 0; i < files.length; i++) {
    let filename = path.join(dir, files[i]);
    let stat = fs.lstatSync(filename);

    if (stat.isDirectory()) {
      walkDir(filename, filter, callback);
    } else if (filter.test(filename)) {
      callback(filename);
    }
  }
}

function replaceInFile(file, pattern, replacement) {
  fs.writeFileSync(
    file,
    fs.readFileSync(file).toString()
      .replace(pattern, replacement)
  );
}

function get(url, cb) {
  https.get(url, function(response) {
    var rawData = '';
    var output = response;

    if (response.headers['content-encoding'] === 'gzip') {
      output = zlib.createGunzip();

      response.pipe(output);
    }

    output.on('data', function(chunk) {
      rawData += chunk;
    });

    output.on('end', function() {
      cb(null, rawData);
    });
  }).on('error', function(error) {
    cb(error, null);
  });
}

// ---- START: Sync static pages hook ---- //
function copyFileSync(source, target) {
  var targetFile = target;

  //if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target, level) {
  var targetFolder = target;
  level = level || 0;

  // check if folder needs to be created or integrated (skip first level)
  if (level > 0) {
    targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder);
    }
  }

  if (fs.lstatSync(source).isDirectory()) {
    fs.readdirSync(source).forEach(function(item) {
      var curSource = path.join(source, item);

      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder, ++level);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

function getRootMicroservice(microservices) {
  for (let i in microservices) {
    if (!microservices.hasOwnProperty(i)) {
      continue;
    }

    let microservice = microservices[i];

    if (microservice.isRoot) {
      return microservice;
    }
  }

  return null;
}
// ---- END: Sync static pages hook ---- //

const articlesPaths = [
  '/nytimes/www.nytimes.com/2016/07/04/technology',
  '/bloomberg/www.bloomberg.com/news/articles',
  '/wapost/www.washingtonpost.com/news/the-fix',
  '/wapost/www.washingtonpost.com/politics/clinton-headed-to-nebraska-which-could-provide-exactly-1-of-270-electoral-votes'
];

module.exports = function(callback) {
  var rootMs = getRootMicroservice(this.microservice.property.microservices);
  var env = this.microservice.property.env;

  if (rootMs) {
    console.log('Copying all static pages into root microservice');
    var source = path.join(this.microservice.autoload.frontend, 'static-pages');
    var target = rootMs.autoload.frontend;

    copyFolderRecursiveSync(source, target);
  } else {
    console.error('Error copying static pages. Root microservice is not found.');
  }

  console.log('Start downloading latest Swagger Specification file');
  get(SWAGGER_URL, function (err, res) {
    if (err) {
      console.error(err);
      return;
    }

    var json = yaml.parse(res);
    if (env !== 'prod') {
      json.host = 'api-dev.adtechmedia.io'
    }

    fs.writeFile('frontend/files/swagger.json', JSON.stringify(json), function () {
      console.log('Swagger Specification file successfully persisted');
    });
  });

  console.log('Downloading latest ATM Service Worker from ' + ATM_SW_URL);
  get(ATM_SW_URL, function(error, swContent) {
    if (error) {
      console.error(error);

      return callback();
    }

    var frontendDir = this.microservice.autoload.frontend;
    var atmHost = this.microservice.parameters.frontend.atm.host;
    var atmSwPath = path.join(frontendDir, ATM_SW_PATH);
    var atmSwWebPath = '/' + path.join(this.microservice.identifier, ATM_SW_PATH);
    var nytRibbonPath = path.join(__dirname, ATM_NYT_RIBBON_PATH);
    var nytRibbonContent;

    console.log('Persist NYT Ribbon content from ' + nytRibbonPath);

    try {
      nytRibbonContent = fs.readFileSync(nytRibbonPath);
    } catch (error) {
      console.error(error);
    }

    console.log('Persist ATM Service Worker to ' + atmSwPath);

    try {
      fs.writeFileSync(atmSwPath, swContent);
    } catch (error) {
      console.error(error);
    }

    articlesPaths.forEach(function(articlesPath) {
      var fullArticlesPath = path.join(frontendDir, articlesPath);

      walkDir(fullArticlesPath, /\.html$/, function(filename) {
        console.log('Inject ATM base url (' + atmHost + ') in ' + filename);
        console.log('Inject SW path (' + atmSwWebPath + ') in ' + filename);

        try {
          replaceInFile(filename, /%_ATM_NYT_RIBBON_PLACEHOLDER_%/g, nytRibbonContent);
          replaceInFile(filename, /%_ATM_BASE_URL_PLACEHOLDER_%/g, atmHost);
          replaceInFile(filename, /%_ATM_SW_PATH_PLACEHOLDER_%/g, atmSwWebPath);
        } catch (error) {
          console.error(error);
        }
      });
    });

    callback();
  }.bind(this));
};
