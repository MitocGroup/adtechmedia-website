'use strict';

/* eslint  max-len: 0, no-catch-shadow: 0, no-use-before-define: 0 */

const https = require('https');
const path = require('path');
const zlib = require('zlib');
const fs = require('fs');
const { execSync } = require('child_process');

/**
 * Install required npm modules
 */
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  execSync('npm install', {cwd: __dirname});
}

const yaml = require('js-yaml');
const uglifyJs = require('uglify-js');
const { minify } = require('html-minifier');

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
    fs.readFileSync(file).toString().replace(pattern, replacement)
  );
}

function get(url, cb) {
  https.get(url, response => {
    let rawData = '';
    let output = response;

    if (response.headers['content-encoding'] === 'gzip') {
      output = zlib.createGunzip();
      response.pipe(output);
    }

    output.on('data', chunk => {
      rawData += chunk;
    });

    output.on('end', () => {
      cb(null, rawData);
    });
  }).on('error', error => {
    cb(error, null);
  });
}

function copyFileSync(source, target) {
  let targetFile = target;

  // if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  // Minify HTML on moving to root-angular
  let sourceFileContent = fs.readFileSync(source, { encoding: 'utf8' });
  fs.writeFileSync(targetFile, minify(sourceFileContent, {
    minifyJS: true,
    minifyCSS: true,
    removeComments: true,
    collapseWhitespace: true,
    removeStyleLinkTypeAttributes: true
  }));
}

function copyFolderRecursiveSync(source, target, level) {
  let targetFolder = target;
  level = level || 0;

  // check if folder needs to be created or integrated (skip first level)
  if (level > 0) {
    targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder);
    }
  }

  if (fs.lstatSync(source).isDirectory()) {
    fs.readdirSync(source).forEach(item => {
      let curSource = path.join(source, item);

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

const articlesPaths = [
  '/nytimes/www.nytimes.com/2016/07/04/technology',
  '/bloomberg/www.bloomberg.com/news/articles',
  '/wapost/www.washingtonpost.com/news/the-fix',
  '/wapost/www.washingtonpost.com/politics/clinton-headed-to-nebraska-which-could-provide-exactly-1-of-270-electoral-votes'
];

module.exports = function(callback) {
  let mService = this.microservice;
  let env = mService.property.env;
  let frontendPath = mService.autoload.frontend;
  let frontendParams = mService.parameters.frontend;
  let atmSwUrl = frontendParams.atm.swSource;

  console.log('Downloading latest Swagger Specification file');
  get(frontendParams.atm.swaggerUrl, (err, res) => {
    if (err) {
      throw err;
    }

    let json = yaml.load(res);
    if (env !== 'prod') {
      json.host = 'api-dev.adtechmedia.io'
    }

    fs.writeFileSync(path.join(frontendPath, 'files/swagger.json'), JSON.stringify(json));

    console.log('Inject corresponding robots.txt');
    injectRobotsTxt();
  });

  function injectRobotsTxt() {
    let sourceRobots = (env === 'prod') ? 'prod-robots.txt' : 'dev-robots.txt';

    fs.writeFileSync(
      path.join(frontendPath, 'static-pages/robots.txt'),
      fs.readFileSync(path.join(frontendPath, 'files', sourceRobots))
    );

    console.log('Copying all static pages into root microservice');
    minifyJsFiles();
  }

  function minifyJsFiles() {
    const srcPath = path.join(frontendPath, 'js/src');

    walkDir(srcPath, /\.js/, srcFilePath => {
      let distFilePath = srcFilePath.replace('/js/src/', '/js/dist/');
      let sourceJs = fs.readFileSync(srcFilePath, {encoding: 'utf8'});
      let minResult = uglifyJs.minify(sourceJs);
      fs.writeFileSync(distFilePath, minResult.code);
    });

    copyStaticPages();
  }

  function copyStaticPages() {
    let rootMs = getRootMicroservice(mService.property.microservices);

    if (rootMs) {
      let source = path.join(frontendPath, 'static-pages');
      let target = rootMs.autoload.frontend;

      copyFolderRecursiveSync(source, target);
    } else {
      console.error('Error copying static pages. Root microservice is not found.');
    }

    injectServiceWorker();
  }
  
  function swContent(cb) {
    if (/^https?:\/\//i.test(atmSwUrl)) {
      console.log(`Downloading latest ATM Service Worker from ${atmSwUrl}`);
      
      return get(atmSwUrl, cb);
    }
    
    try {
      console.log(`Reading ATM Service Worker from ${atmSwUrl}`);
      
      cb(null, fs.readFileSync(path.join(__dirname, atmSwUrl)));
    } catch (error) {
      cb(error, null);
    }
  }

  function injectServiceWorker() {
    swContent((error, swContent) => {
      if (error) {
        throw error;
      }

      const atmHost = frontendParams.atm.host;
      const atmSwPath = frontendParams.atm.swPath;
      const atmSwPathFull = path.join(frontendPath, atmSwPath);
      const atmSwWebPath = '/' + path.join(mService.identifier, atmSwPath);
      const nytRibbonPath = path.join(__dirname, 'assets/nyt-ribbon.html');

      console.log(`Persist NYT Ribbon content from ${nytRibbonPath}`);
      let nytRibbonContent;
      try {
        nytRibbonContent = fs.readFileSync(nytRibbonPath);
      } catch (error) {
        console.error(error);
      }

      console.log(`Persist ATM Service Worker to ${atmSwPathFull}`);
      try {
        fs.writeFileSync(atmSwPathFull, swContent);
      } catch (error) {
        console.error(error);
      }

      articlesPaths.forEach(articlesPath => {
        let fullArticlesPath = path.join(frontendPath, articlesPath);

        walkDir(fullArticlesPath, /\.html$/, filename => {
          console.log(`Inject ATM base url (${atmHost}) in ${articlesPath}`);
          console.log(`Inject SW path (${atmSwWebPath}) in ${articlesPath}`);

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
    });
  }

};
