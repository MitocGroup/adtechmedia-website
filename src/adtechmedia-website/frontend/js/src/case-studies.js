/* global DeepFramework */
/* eslint-disable no-unused-vars */

var url = 'manage.adtechmedia.io';

DeepFramework.Kernel.bootstrap(function() {
  var dashboardUrl = DeepFramework.Kernel.config.microservices['adtechmedia-website'].parameters.dashboardUrl;

  if (dashboardUrl) {
    url = dashboardUrl;
  }
});

function onRegister() {
  window.location = url + '/accounts/signup'
}

function onLogin() {
  window.location = url + '/accounts/signin'
}
