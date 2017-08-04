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
  execSync('npm install || echo "..."', { cwd: __dirname, shell: true });
}

const fse = require('fs-extra');
const yaml = require('js-yaml');
const sass = require('node-sass');
const uglifyJs = require('uglify-js');
const { minify } = require('html-minifier');

/**
 * Read directory recursively
 * @param dir
 * @param filter
 * @param callback
 */
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

/**
 * Replace by pattern
 * @param file
 * @param pattern
 * @param replacement
 */
function replaceInFile(file, pattern, replacement) {
  fs.writeFileSync(file, fs.readFileSync(file).toString().replace(pattern, replacement));
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

const articlesPaths = [
  '/nytimes/www.nytimes.com/2016/07/04/technology',
  '/bloomberg/www.bloomberg.com/news/articles',
  '/wapost/www.washingtonpost.com/news/the-fix',
  '/wapost/www.washingtonpost.com/politics/clinton-headed-to-nebraska-which-could-provide-exactly-1-of-270-electoral-votes'
];

module.exports = function(callback) {
  const mService = this.microservice;
  const env = mService.property.env;
  const frontendPath = path.join(__dirname, 'frontend');
  const buildPath = path.join(frontendPath, '_build');
  const frontendParams = mService.parameters.frontend;

  console.log('Downloading latest Swagger Specification file');
  get(frontendParams.swaggerUrl, (err, res) => {
    if (err) {
      throw err;
    }

    let subDomain;
    switch (env) {
      case 'prod':
        subDomain = 'api';
        break;
      case 'stage':
        subDomain = 'api-stage';
        break;
      default:
        subDomain = 'api-test';
    }

    let json = yaml.load(res);
    json.host = `${subDomain}.adtechmedia.io`;

    fse.ensureDirSync(`${buildPath}/files`);
    fs.writeFileSync(`${buildPath}/files/swagger.json`, JSON.stringify(json));

    getDeepFramework();
  });

  function getDeepFramework() {
    console.log('Installing latest deep-framework from GitHub');
    const deepFramework = 'https://raw.githubusercontent.com/MitocGroup/deep-framework/master/src/deep-framework/browser/framework.js';

    get(deepFramework, (err, res) => {
      if (err) {
        throw err;
      }

      fs.writeFileSync(`${buildPath}/js/vendor/deep-framework.min.js`, res);
    });

    injectRobotsTxt();
  }

  function injectRobotsTxt() {
    console.log('Inject corresponding robots.txt');

    let sourceRobots = (env === 'prod') ? 'prod-robots.txt' : 'dev-robots.txt';
    fs.writeFileSync(`${buildPath}/robots.txt`, fs.readFileSync(`${frontendPath}/files/${sourceRobots}`));
    fs.writeFileSync(`${buildPath}/sitemap.xml`, fs.readFileSync(`${frontendPath}/files/sitemap.xml`));

    minifyJsFiles();
  }

  function minifyJsFiles() {
    console.log('Minifying js files');

    const srcPath = path.join(frontendPath, 'js/src');
    fse.ensureDirSync(`${buildPath}/js`);

    walkDir(srcPath, /\.js$/, srcFilePath => {
      let sourceJs = fs.readFileSync(srcFilePath, {encoding: 'utf8'});
      let minResult = uglifyJs.minify(sourceJs);

      fs.writeFileSync(
        `${buildPath}/js/${path.basename(srcFilePath)}`,
        minResult.code
      );
    });

    fse.copySync(`${frontendPath}/js/vendor`, `${buildPath}/js/vendor`);

    minifyStaticPages();
  }

  function minifyStaticPages() {
    console.log('Minifying static pages');

    let srcDir = `${frontendPath}/static-pages`;
    walkDir(srcDir, /\.html$/, srcFile => {
      // fs.copySync(srcFile, srcFile.replace(srcDir, buildPath));
      const destFile = srcFile.replace(srcDir, buildPath);
      fse.ensureDirSync(path.dirname(destFile));

      let srcFileContent = fs.readFileSync(srcFile, { encoding: 'utf8' });
      fs.writeFileSync(destFile, minify(srcFileContent, {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeStyleLinkTypeAttributes: true
      }));

    });

    minifyCssFiles();
  }

  function minifyCssFiles() {
    console.log('Compiling sass to css');

    fse.ensureDirSync(`${buildPath}/css`);

    const srcDir = `${frontendPath}/css/src`;
    walkDir(srcDir, /main\.scss$/, sassFile => {
      sass.render({ file: sassFile, outputStyle: 'compressed' }, (error, result) => {
        if (error) {
          throw error;
        }

        const name = path.dirname(sassFile.replace(srcDir, ''));
        const cssName = (name !== '/') ? `${name}.min.css` : 'main.min.css';

        fs.writeFileSync(`${buildPath}/css/${cssName}`, result.css);
      });
    });

    fse.copySync(`${frontendPath}/css/vendor`, `${buildPath}/css/vendor`);

    copyAssets();
  }

  function copyAssets() {
    console.log('Preparing site assets');

    fse.copySync(`${frontendPath}/data`, `${buildPath}/data`);
    fse.copySync(`${frontendPath}/fonts`, `${buildPath}/fonts`);
    fse.copySync(`${frontendPath}/images`, `${buildPath}/images`);
    fse.copySync(`${frontendPath}/demo-pages`, `${buildPath}/demo-pages`);
    fse.copySync(`${frontendPath}/.well-known`, `${buildPath}/.well-known`);

    prepareDemoPages();
  }

  function prepareDemoPages() {
    console.log('Injecting ATM base, SW and ribbon');

    articlesPaths.forEach(articlesPath => {
      const swSource = frontendParams.swSource;
      const atmSource = frontendParams.atmSource;
      const manageBaseUrl = frontendParams.dashboardUrl;
      const fullArticlesPath = path.join(buildPath, 'demo-pages', articlesPath);
      const ribbonContent = fs.readFileSync(`${frontendPath}/files/nyt-ribbon.html`).toString();

      walkDir(fullArticlesPath, /\.html$/, filename => {
        console.log(`Injecting into article: ${path.basename(filename)}`);

        try {
          replaceInFile(filename, /%_ATM_NYT_RIBBON_PLACEHOLDER_%/g, ribbonContent);
          replaceInFile(filename, /%_ATM_BASE_URL_PLACEHOLDER_%/g, manageBaseUrl);
          replaceInFile(filename, /%_ATM_SW_PATH_PLACEHOLDER_%/g, swSource);
          replaceInFile(filename, /%_ATM_URL_PLACEHOLDER_%/g, atmSource);
        } catch (error) {
          console.error(error);
        }
      });
    });

    callback();
  }
};
