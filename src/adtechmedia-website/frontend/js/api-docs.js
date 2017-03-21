jQuery(function($) {
  'use strict';

  var $apiKey = $('#api-key');
  var $apiKeyBtn = $('#api-key-apply');

  $.notify.defaults({
    position: 'bottom right'
  });

  /**
   * Apply user's api key
   */
  $apiKeyBtn.on('click', function() {
    var token = $apiKey[0].value;
    if(token && token.trim() !== '') {
      swaggerUi.api.clientAuthorizations.add(
        'api_key', new SwaggerClient.ApiKeyAuthorization('X-Api-Key', token, 'header')
      );
      window.apiKey = token;
      $.notify('Api-key successfully applied', 'success');
    }
  });

  /**
   * Configure swagger-ui
   * @type {SwaggerUi}
   */
  var swaggerUi = new SwaggerUi({
    url: '/adtechmedia-website/files/swagger.yaml',
    dom_id: 'swagger-ui-container',
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
    onFailure: function(error) {
      $.notify('Unable to Load SwaggerUI', 'error');
      console.error(error);
    },
    useJQuery: true,
    docExpansion: 'list',
    jsonEditor: false,
    defaultModelRendering: 'schema',
    showOperationIds: false
  });

  swaggerUi.load();

  /**
   * Ajax pre-send listener
   */
  $(document).ajaxSend(function(event, request, settings) {
    var requestUrl = settings.url;
    var allowedRegExp = new RegExp('/atm-admin\/api-gateway-key/');

    if (!allowedRegExp.test(requestUrl)) {
      if (!window.apiKey) {
        request.abort();
        $.notify('Api key is wrong or missing', 'warn');
      }
    }
  });

});
