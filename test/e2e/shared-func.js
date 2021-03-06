import config from './config.cfg';

const sharedFunctions = {
  anyCase: (value) => {
    return new RegExp('^' + value + '$', 'ig');
  },
  visible: (selector) => {
    return selector.with({
      visibilityCheck: true,
      timeout: 60000,
    }).visible;
  },
  fictureResize: (fix, type = 'desktop') => {
    let width, height;

    if (type === 'mobile') {
      width = config.mobileResolution.width;
      height = config.mobileResolution.height;
    } else {
      width = config.desktopResolution.width;
      height = config.desktopResolution.height;
    }

    fix.beforeEach(async t => {
      await t
        .resizeWindow(width, height);  
    }); 
  },
};

export default sharedFunctions;