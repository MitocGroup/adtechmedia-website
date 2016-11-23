/**
 * Created by mgoria on 9/15/16.
 */

'use strict';

/* eslint  max-len: 0, no-catch-shadow: 0 */

var ATM_SW_URL = 'https://adm.adtechmedia.io/atm-core/atm-build/sw.js';
var ATM_SW_PATH = 'js/sw.js';

var path = require('path');
var fs = require('fs');
var https = require('https');
var zlib = require('zlib');

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
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      return console.error('Error on reading from ' + file + ' file. ' + err);
    }

    fs.writeFile(file, data.replace(pattern, replacement), 'utf8', function(err) {
      if (err) {
        return console.error('Error on writing to ' + file + ' file. ' + err);
      }
    });
  });
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

const articlesPaths = [
  '/nytimes/www.nytimes.com/2016/07/04/technology',
  '/bloomberg/www.bloomberg.com/news/articles',
  '/wapost/www.washingtonpost.com/news/the-fix',
  '/wapost/www.washingtonpost.com/politics/clinton-headed-to-nebraska-which-could-provide-exactly-1-of-270-electoral-votes'
];

module.exports = function(callback) {  
  console.log('Downloading latest ATM Service Worker from ' + ATM_SW_URL);
  
  get(ATM_SW_URL, function(error, swContent) {
    if (error) {
      console.error(error);
      
      return callback();
    }
    
    get(ATM_SW_URL + '.map', function(error, swMapContent) {
      if (error) {
        console.error(error);
        
        return callback();
      }
      
      var frontendDir = this.microservice.autoload.frontend;
      var atmHost = this.microservice.parameters.frontend.atm.host;
      var atmSwPath = path.join(frontendDir, ATM_SW_PATH);
      var atmSwWebPath = '/' + path.join(this.microservice.identifier, ATM_SW_PATH);

      console.log('Persist ATM Service Worker to ' + atmSwPath);

      try {
        fs.writeFileSync(atmSwPath, swContent);
        fs.writeFileSync(atmSwPath + '.map', swMapContent);
      } catch (error) {
        console.error(error);
      }

      articlesPaths.forEach(function(articlesPath) {
        var fullArticlesPath = path.join(frontendDir, articlesPath);
        
        walkDir(fullArticlesPath, /\.html$/, function(filename) {
          console.log('Inject ATM base url (' + atmHost + ') in ' + filename);
          console.log('Inject SW path (' + atmSwWebPath + ') in ' + filename);
          
          replaceInFile(filename, /%_ATM_BASE_URL_PLACEHOLDER_%/g, atmHost);
          replaceInFile(filename, /%_ATM_SW_PATH_PLACEHOLDER_%/g, atmSwWebPath);
        });
      });
      
      callback();
    }.bind(this));
  }.bind(this));
};
