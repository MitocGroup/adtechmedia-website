const CALCULATOR_ENDPOINT = 'https://o9988bjzjh.execute-api.us-east-1.amazonaws.com/prod';

$(document).ready(function () {
    function loadNichesList($selector) {
        $.ajax({
            url: CALCULATOR_ENDPOINT + '/niches',
            success: function (data) {
                var niches = data['niches'];
                for (var key in niches) {
                    var niche = niches[key];
                    $selector.append(
                        '<option value="' + niche + '">' + niche + '</option>'
                    );
                }
            }
        })
    }

    var $calculator = $('#calculator-form');
    if ($calculator) {
        var $nicheSelect = $('#niche');
        $nicheSelect.on('load', function () {

        });
        loadNichesList($nicheSelect);

        var $calculatorSubmit = $('#calculator-form-submit');
        $calculatorSubmit.on('click', function () {
            var data = {};
            $calculator.serializeArray().forEach(function (input) {
                data[input.name] = input.value;
            });

            $.ajax({
                type: 'POST',
                url: CALCULATOR_ENDPOINT + '/calculator',
                data: data,
                success: function (responseContent) {
                    var confirmTokenQuery = 'confirm=' + responseContent.id;
                    window.location.href = '/calculator-result?' + confirmTokenQuery;
                }
            });
        })
    }

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
;
    if ($calculatorReport && resultToken) {
        var $calculatorResult = $('#calculator-result');
        $.ajax({
            type: 'POST',
            url: CALCULATOR_ENDPOINT + '/calculator',
            data: {
                id: resultToken
            },
            success: function (responseContent) {
                $calculatorResult.html(responseContent.losses);
            }
        });

        var $calculatorReportSubmit = $('#calculator-report-submit');
        $calculatorReportSubmit.on('click', function () {
            var data = {
                'id': resultToken
            };

            $calculatorReport.serializeArray().forEach(function (input) {
                data[input.name] = input.value;
            });

            $.ajax({
                type: 'POST',
                url: CALCULATOR_ENDPOINT + '/calculator',
                data: data,
                success: function (responseContent) {
                    window.location.href = '/calculator-confirmation'
                }
            });
        });
    }
});