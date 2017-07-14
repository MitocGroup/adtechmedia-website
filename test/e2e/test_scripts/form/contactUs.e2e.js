import { Selector } from 'testcafe';

fixture `"Contact" form request submit verification`
  .page `https://www-test.adtechmedia.io/`;

test('Check "Contact" form request can be submitted by user with valid data', async t => {
  const contactTopMenuLink = await Selector('.clearfix > li:nth-child(5) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(contactTopMenuLink.exists).ok()
    .hover(contactTopMenuLink)
    .click(contactTopMenuLink)

  const pageElementContact = await Selector('#contact:nth-child(1) > form > h1');

  await t
    .expect(pageElementContact.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementContact.innerText).eql('Contact')

  const contactFormModal = await Selector('.contact-form')
  const contactFormNamelField = await Selector('#name-field')
  const contactFormPhoneField = await Selector('#phone-field')
  const contactFormEmailField = await Selector('#email-field')
  const contactFormMessageField = await Selector('#message-field');

  await t
    .expect(contactFormNamelField.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok();

  await t
    .typeText(contactFormNamelField, 'Alexandr Vozicov')
    .typeText(contactFormPhoneField, '999 999 9999')
    .typeText(contactFormEmailField, 'avozicov@mitocgroup.com')
    .typeText(contactFormMessageField, 'Automation Testing Contact Form submit')

  const contactFormSubmitButton = await Selector('#contact-button');

  await t
    .hover(contactFormSubmitButton)
    .click(contactFormSubmitButton, { speed: 0.5 });
});
