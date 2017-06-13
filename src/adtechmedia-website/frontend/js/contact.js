function _initGoogleMaps() {
  var mapContainer = document.getElementById('googleMap');

  if (mapContainer) {
    var myCenter = new google.maps.LatLng(41.043671, -74.0764);

    google.maps.event.addDomListener(window, 'load', function initialize() {
      var map = new google.maps.Map(mapContainer, {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var marker = new google.maps.Marker({
        position: myCenter,
      });

      marker.setMap(map);
    });
  }
}

new InputMask().Initialize(
  document.querySelectorAll('#phone-field'),
  {mask: InputMaskDefaultMask.Phone}
);

_initGoogleMaps();

var contactUsCaptcha;

/**
 * Init google captcha widget
 */
function setCaptchaKey() {
  DeepFramework.Kernel.bootstrap(function (kernel) {
    var captchaSiteKey = DeepFramework.Kernel.config
      .microservices['adtechmedia-website'].parameters.captchaSiteKey;

    contactUsCaptcha = grecaptcha.render('contact-us-re-captcha', {
      sitekey: captchaSiteKey,
      size: 'invisible',
      callback: function (token) {
        sendContactUsEmail(token);
      }
    });
  });
}

/**
 * Execute google captcha
 * @returns {boolean}
 */
function executeCaptcha() {
  grecaptcha.execute(contactUsCaptcha);
  return false;
}

function handleCallback(error) {
  if (error) {
    return noty({
      text: 'An error occurred during processing',
      type: 'error',
      timeout: 3000
    });
  }

  return noty({
    text: 'Thank you. We will contact you soon.',
    type: 'success',
    timeout: 3000
  });
}

function disableForm(form) {
  for (var index in form) {
    if (!form.hasOwnProperty(index)) {
      continue;
    }

    form[index].classList.add('disabled')
  }
}

function enableForm(form) {
  for (var index in form) {
    if (!form.hasOwnProperty(index)) {
      continue;
    }

    form[index].classList.remove('disabled')
  }
}

function sendEmail(payload, callback) {
  var emailResource = DeepFramework.Kernel.get('resource').get('@adtechmedia-website:email');

  DeepFramework.Kernel.get('security').anonymousLogin(function() {
    emailResource.request('send', payload).send(function(response) {
      if (response.isError) {
        return callback(response.error);
      }

      return callback(null, response.data);
    });
  });
}

function sendContactUsEmail(token) {
  var formElement = document.getElementById('contactus-form');
  var form = {
    nameElement: document.getElementById('name-field'),
    phoneElement: document.getElementById('phone-field'),
    emailElement: document.getElementById('email-field'),
    messageElement: document.getElementById('message-field'),
  };

  var payload = {
    name: form.nameElement.value,
    phone: form.phoneElement.value,
    email: form.emailElement.value,
    message: form.messageElement.value,
    captchaResponse: token,
  };

  if (payload.name && payload.phone && payload.email && payload.message) {
    disableForm(form);
    sendEmail(payload, function(error) {
      handleCallback(error);
      enableForm(form);

      if (!error) {
        formElement.reset();
      }
    });
  } else {
    noty({
      text: 'Please fill all required fields',
      type: 'warning',
      timeout: 3000
    });
  }

  grecaptcha.reset(contactUsCaptcha);
}

jQuery(function($) {
  'use strict';

  var $submitElement = $('#contact-button');

  $submitElement.on('click', function() {
    executeCaptcha();
  });

});
