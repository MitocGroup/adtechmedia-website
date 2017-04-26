var installStepData = {
  container: document.getElementById('install-step'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/adtechmedia-website/data/install.json'

};
var installStep = bodymovin.loadAnimation(installStepData);

var customizeStepData = {
  container: document.getElementById('customize-step'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/adtechmedia-website/data/customize.json'

};
var customizeStep = bodymovin.loadAnimation(customizeStepData);

var payStepData = {
  container: document.getElementById('pay-step'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/adtechmedia-website/data/pay.json'

};
var payStep = bodymovin.loadAnimation(payStepData);

$('#install-block').on({
  mouseenter: function() {
    installStep.play();
  }, mouseleave: function() {
    installStep.stop();
  }
});

$('#customize-block').on({
  mouseenter: function() {
    customizeStep.play();
  }, mouseleave: function() {
    customizeStep.stop();
  }
});

$('#pay-block').on({
  mouseenter: function() {
    payStep.play();
  }, mouseleave: function() {
    payStep.stop();
  }
});
