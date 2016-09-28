var captchaResponse;

function setCaptchaKey() {
  var captchaSiteKey = DeepFramework.Kernel.config
    .microservices['deep-adtechmedia'].parameters.captchaSiteKey;

  grecaptcha.render('re-captcha', {
    sitekey: captchaSiteKey,
    callback: function(responseKey) {
      captchaResponse = responseKey;
    }
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
    captchaResponse: captchaResponse,
  };

  disableForm(form);
  sendEmail(payload, function(error) {
    handleCallback(error);
    enableForm(form);

    if (!error) {
      formElement.reset();
    }
  });

  return false;
}

function sendGetStartedEmail() {
  var emailElement = document.getElementById('get-started-email');

  var form = {
    email : emailElement
  };

  var payload = {
    email: emailElement.value
  };

  disableForm(form);
  sendEmail(payload, function(error) {
    handleCallback(error);
    enableForm(form);

    if (!error) {
      emailElement.value = '';
    }
  });
}
