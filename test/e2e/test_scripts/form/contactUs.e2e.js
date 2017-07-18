import { Selector } from 'testcafe';

fixture`"Contact" form request submit verification`
  .page`https://www-test.adtechmedia.io/contact/`;

test('Check "Contact" form request can be submitted by user with valid data', async t => {
  const contactFormModal = await Selector('.contact-form');

  await t
    .resizeWindow(1920, 1080)
    .expect(contactFormModal.exists).ok();

  const contactFormNamelField = await Selector('#name-field');
  const contactFormPhoneField = await Selector('#phone-field');
  const contactFormEmailField = await Selector('#email-field');
  const contactFormMessageField = await Selector('#message-field');

  await t
    .expect(contactFormNamelField.exists).ok()
    .expect(contactFormPhoneField.exists).ok()
    .expect(contactFormEmailField.exists).ok()
    .expect(contactFormMessageField.exists).ok();

  await t
    .typeText(contactFormNamelField, 'Alexandr Vozicov')
    .typeText(contactFormPhoneField, '999 999 9999')
    .typeText(contactFormEmailField, 'avozicov@mitocgroup.com')
    .typeText(contactFormMessageField, 'Automation Testing Contact Form submit');

  const contactFormSubmitButton = await Selector('#contact-button');

  await t
    .hover(contactFormSubmitButton)
    .click(contactFormSubmitButton, { speed: 0.5 });
});