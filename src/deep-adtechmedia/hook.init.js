/**
 * Created by mgoria on 9/15/16.
 */

'use strict';

/* eslint  max-len:0 */

var path = require('path');
var fs = require('fs');

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
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return console.error(`Error on reading from ${file} file. ${err}`);
    }

    fs.writeFile(file, data.replace(pattern, replacement), 'utf8', (err) => {
      if (err) {
        return console.error(`Error on writing to ${file} file. ${err}`);
      }
    });
  });
}

const articlesPaths = [
  '/nytimes/www.nytimes.com/2016/07/04/technology',
  '/bloomberg/www.bloomberg.com/news/articles',
  '/wapost/www.washingtonpost.com/news/the-fix',
  '/wapost/www.washingtonpost.com/politics/clinton-headed-to-nebraska-which-could-provide-exactly-1-of-270-electoral-votes'
];

module.exports = function(callback) {
  let frontendDir = this.microservice.autoload.frontend;
  let atmHost = this.microservice.parameters.frontend.atm.host;

  // Inject ATM HOST from parameters into all articles
  articlesPaths.forEach(articlesPath => {
    walkDir(path.join(frontendDir, articlesPath), /\.html$/, (filename) => {
      replaceInFile(filename, /%_ATM_BASE_URL_PLACEHOLDER_%/g, atmHost);
    });
  });

  callback();
};
