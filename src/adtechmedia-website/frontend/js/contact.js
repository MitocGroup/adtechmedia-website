var contactUsCaptcha;

function setCaptchaKey() {
  DeepFramework.Kernel.bootstrap(function (kernel) {
    var captchaSiteKey = DeepFramework.Kernel.config
      .microservices['adtechmedia-website'].parameters.captchaSiteKey;

    contactUsCaptcha = grecaptcha.render('contact-us-re-captcha', {
      sitekey: captchaSiteKey
    });
  });
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

function checkCaptchaNotification() {
  noty({
    text: 'Please pass the captcha',
    type: 'warning',
    timeout: 3000
  });
}

function sendEmail(payload, callback) {
  var emailResource = DeepFramework.Kernel.get('resource').get('@deep-adtechmedia:email');

  DeepFramework.Kernel.get('security').anonymousLogin(function() {
    emailResource.request('send', payload).send(function(response) {
      if (response.isError) {
        return callback(response.error);
      }

      return callback(null, response.data);
    });
  });
}

function sendContactUsEmail() {
  if (!grecaptcha.getResponse(contactUsCaptcha)) {
    checkCaptchaNotification()
    return false;
  }

  var formElement = document.getElementById('contactus-form');
  var form = {
    nameElement : document.getElementById('name-field'),
    phoneElement : document.getElementById('phone-field'),
    emailElement : document.getElementById('email-field'),
    messageElement : document.getElementById('message-field'),
    submitElement : document.getElementById('contact-button')
  };

  var payload = {
    name: form.nameElement.value,
    phone: form.phoneElement.value,
    email: form.emailElement.value,
    message: form.messageElement.value,
    captchaResponse: grecaptcha.getResponse(contactUsCaptcha),
  };

  disableForm(form);
  sendEmail(payload, function(error) {
    handleCallback(error);
    enableForm(form);

    if (!error) {
      grecaptcha.reset(contactUsCaptcha);
      formElement.reset();
    }
  });

  return false;
}

function initGetStartedForm() {
  $('input[type=radio][name=customer-type]').change(function() {
    $('#get-started-code')
      .prop('disabled', this.value === 'new')
      .parent().toggleClass('disabled');
  });
}

function init() {
  initGetStartedForm();
}

init();
