/* global noty, Inputmask */

jQuery(function($) {
  'use strict';

  function showWarn(msg) {
    return noty({ text: msg, type: 'warning', timeout: 3000 });
  }

  function calculatorActions(calculatorEndpoint) {
    /**
     * Load, from endpoint, available niches and append to selector
     */
    function loadNichesList($selector) {
      $.ajax({
        url: calculatorEndpoint + '/niches',
        success: function (data) {
          var niches = data['niches'];

          niches
            .sort()
            .forEach(function(v) {
              if(v === 'default') {
                $selector.prepend(
                  '<option value="' + v + '" selected>'
                    + v.replace(/\b\w/g, function(l){ return l.toUpperCase() })
                    + '</option>'
                );
                return;
              }
              $selector.append(
                '<option value="' + v + '">' + v.replace(/\b\w/g, function(l){ return l.toUpperCase() }) + '</option>'
              );
            });
        }
      })
    }

    // Calculator page
    var $calculator = $('#calculator-form');
    if ($calculator) {
      var $nicheSelect = $('#niche');
      loadNichesList($nicheSelect);

      var $calculatorSubmit = $('#calculator-form-submit');
      // Send form data to endpoint and redirect to confirm page with result token
      $calculatorSubmit.on('click', function () {
        var data = {};
        $calculator.serializeArray().forEach(function (input) {
          data[input.name] = input.value;
        });

        $.ajax({
          type: 'POST',
          url: calculatorEndpoint + '/calculator',
          data: data,
          success: function (responseContent) {
            var confirmTokenQuery = 'confirm=' + responseContent.id;
            window.location.href = '/calculator-result/?' + confirmTokenQuery;
          }
        });
      })
    }

    // Calculator report & email
    var $calculatorReport = $('#calculator-form-report'),
      resultToken = (function () {
        try {
          var uri = window.location.href,
            params = uri.split('?')[1].split('&');
          return params.find(function (param) {
            return param.indexOf('confirm=') >= 0;
          }).split('=')[1];
        } catch (e) {
          return null;
        }
      })();

    if ($calculatorReport && resultToken) {
      // Set losses result from endpoint
      var $calculatorResult = $('#calculator-result');
      $.ajax({
        type: 'POST',
        url: calculatorEndpoint + '/calculator',
        data: {
          id: resultToken
        },
        success: function (responseContent) {
          $calculatorResult.html(responseContent.losses);
        }
      });

      var $calculatorReportSubmit = $('#calculator-report-submit');
      // Send email report
      $calculatorReportSubmit.on('click', function (e) {
        var isFormValid = true;
        var data = {
          'id': resultToken
        };

        $calculatorReport.serializeArray().forEach(function (input) {
          var inputName = input.name;
          var inputValue = input.value;

          if (!Inputmask.isValid(inputValue, {alias: inputName})) {
            showWarn(inputName + ' field is not valid');
            isFormValid = false;
            return;
          }

          data[inputName] = inputValue;
        });

        if (isFormValid) {
          $.ajax({
            type: 'POST',
            url: calculatorEndpoint + '/calculator',
            data: data,
            success: function (response) {
              window.location.href = '/calculator-confirmation'
            }
          });
        }
      });
    }
  }

  DeepFramework.Kernel.bootstrap(function (kernel) {
    calculatorActions(
      DeepFramework.Kernel.config.microservices['adtechmedia-website'].parameters.calculatorEndpoint
    );
  });

});
