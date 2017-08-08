/* global SwaggerUi, SwaggerClient, noty */

jQuery(function($) {
  'use strict';

  var $apiKey = $('#api-key');
  var $apiKeyBtn = $('#api-key-apply');

  /**
   * Configure swagger-ui
   * @type {SwaggerUi}
   */
  var swaggerUi = new SwaggerUi({
    url: '/files/swagger.json',
    dom_id: 'swagger-ui-container',
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
    onFailure: function(error) {
      noty({
        text: 'Unable to Load SwaggerUI',
        type: 'error',
        timeout: 3000
      });
    },
    useJQuery: true,
    docExpansion: 'list',
    jsonEditor: false,
    defaultModelRendering: 'schema',
    showOperationIds: false
  });

  swaggerUi.load();

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
      noty({
        text: 'Api-key successfully applied',
        type: 'success',
        timeout: 3000
      });
    }
  });

  /**
   * Ajax pre-send listener
   */
  $(document).ajaxSend(function(event, request, settings) {
    var requestUrl = settings.url;
    var allowedRegExp = new RegExp('atm-admin\/api-gateway-key\/create', 'gi');

    if (!allowedRegExp.test(requestUrl)) {
      if (!window.apiKey) {
        request.abort();
        noty({
          text: 'Api key is wrong or missing',
          type: 'warning',
          timeout: 3000
        });
      }
    }
  });

});
