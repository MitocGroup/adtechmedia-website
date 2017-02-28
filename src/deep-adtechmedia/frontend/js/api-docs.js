jQuery(function($) {
  'use strict';

  var $apiKey = $('#api-key');
  var $apiKeyBtn = $('#api-key-apply');

  /**
   * Apply user's api key
   */
  $apiKeyBtn.on('click', function() {
    var token = $apiKey[0].value;
    if(token && token.trim() != '') {
      swaggerUi.api.clientAuthorizations.add(
        'api_key', new SwaggerClient.ApiKeyAuthorization('X-Api-Key', token, 'header')
      );
    }
  });

  /**
   * Configure swagger-ui
   * @type {SwaggerUi}
   */
  var swaggerUi = new SwaggerUi({
    url: '/deep-adtechmedia/files/swagger.yaml',
    dom_id: 'swagger-ui-container',
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
    onFailure: function(data) {
      console.error('Unable to Load SwaggerUI', data);
    },
    docExpansion: 'list',
    jsonEditor: false,
    defaultModelRendering: 'schema',
    showOperationIds: false
  });

  swaggerUi.load();
});
