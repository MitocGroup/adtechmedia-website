/* global bodymovin */

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

var laptopData = {
  container: document.getElementById('laptop-anim'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: '/adtechmedia-website/data/laptop.json'

};
var laptopAnim = bodymovin.loadAnimation(laptopData);


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

$(window).on('load', function(){
  laptopAnim.play();
});

laptopAnim.addEventListener('loopComplete', function(){
  laptopAnim.pause();
  $('#laptop-actions').addClass('shown');
});

$('.laptop').on('click', '.play', function(){
  $('#laptop-actions').removeClass('shown');
  laptopAnim.play();
});
