function sendEmail(payload) {
  var emailResource = DeepFramework.Kernel.get('resource').get('@deep-adtechmedia:email');

  DeepFramework.Kernel.get('security').anonymousLogin(function() {
    emailResource.request('send', payload).send(function(response) {
      if (response.isError) {
        return console.log(response.error);
      }
    });
  });
}

function sendContactUsEmail() {
  var payload = {
    name: document.getElementById('name-field').value,
    phone: document.getElementById('phone-field').value,
    email: document.getElementById('email-field').value,
    message: document.getElementById('message-field').value,
  };

  sendEmail(payload);

  return false;
}

function sendGetStartedEmail() {
  var payload = {
    email: document.getElementById('get-started-email').value
  };

  sendEmail(payload);
}
