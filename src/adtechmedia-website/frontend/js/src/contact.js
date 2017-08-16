/* global google, noty, Inputmask, grecaptcha */
/* eslint-disable no-unused-vars */

/**
 * Init Google Maps
 */
(function () {
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
}());

var contactUsCaptcha;
var phoneInput = document.getElementById('phone-field');
var contactForm = {
  phoneElement: phoneInput,
  nameElement: document.getElementById('name-field'),
  emailElement: document.getElementById('email-field'),
  messageElement: document.getElementById('message-field'),
  submitElement: document.getElementById('contact-button')
};

/**
 * Init phone mask
 */
Inputmask({ alias: 'phone'}).mask(phoneInput);

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

/**
 * Send email from payload
 * @param payload
 * @param callback
 */
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

/**
 * Handle contact us form
 * @param token
 */
function sendContactUsEmail(token) {
  disableForm(contactForm);
  sendEmail({
    name: contactForm.nameElement.value,
    phone: contactForm.phoneElement.value,
    email: contactForm.emailElement.value,
    message: contactForm.messageElement.value,
    captchaResponse: token,
  }, function(error) {
    handleCallback(error);
    enableForm(contactForm);

    if (!error) {
      contactForm.messageElement.value = '';
    }
  });

  grecaptcha.reset(contactUsCaptcha);
}

/**
 * Init google captcha widget
 */
function setCaptchaKey() {
  DeepFramework.Kernel.bootstrap(function (kernel) {
    var captchaSiteKey = DeepFramework.Kernel.config.microservices['adtechmedia-website'].parameters.captchaSiteKey;

    contactUsCaptcha = grecaptcha.render('contact-us-re-captcha', {
      sitekey: captchaSiteKey,
      size: 'invisible',
      callback: function (token) {
        sendContactUsEmail(token);
      }
    });
  });
}

jQuery(function($) {
  'use strict';

  $('#contact-button').on('click', function() {
    var isPhoneValid = Inputmask.isValid(contactForm.phoneElement.value, {alias: 'phone'});
    var isEmailValid = Inputmask.isValid(contactForm.emailElement.value, {alias: 'email'});

    if (contactForm.nameElement.value.trim()
      && contactForm.messageElement.value.trim() && isPhoneValid && isEmailValid) {
      executeCaptcha();
    } else {
      noty({
        text: 'Please fill all required fields',
        type: 'warning',
        timeout: 3000
      });
    }
  });

});
