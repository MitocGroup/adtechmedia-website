function sendEmail() {
  DeepFramework.Kernel.get('security').anonymousLogin(() => {
    var emailResource = DeepFramework.Kernel.get('resource').get('@deep-adtechmedia:email');

    var payload = {
      name: document.getElementById('name-field').value,
      phone: document.getElementById('phone-field').value,
      email: document.getElementById('email-field').value,
      message: document.getElementById('message-field').value,
    };

    emailResource.request('send', payload).send((response) => {
      
    });
  });

  return false;
}
