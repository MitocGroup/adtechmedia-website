import { Selector } from 'testcafe';
import ContactForm from '../pages/contact.po';

const contactForm = new ContactForm();

fixture`"Contact" form request submit verification`
  .page`https://www-test.adtechmedia.io/contact/`;

test('Check "Contact" form request can be submitted by user with valid data', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(contactForm.formModal.exists).ok();

    await t
    .expect(contactForm.nameField.exists).ok()
    .expect(contactForm.phoneField.exists).ok()
    .expect(contactForm.emailField.exists).ok()
    .expect(contactForm.messageField.exists).ok();

  await t
    .typeText(contactForm.nameField, 'Alexandr Vozicov')
    .typeText(contactForm.phoneField, '999 999 9999')
    .typeText(contactForm.emailField, 'avozicov@mitocgroup.com')
    .typeText(contactForm.messageField, 'Automation Testing Contact Form submit');

  await t
    .hover(contactForm.submitButton)
    .click(contactForm.submitButton, { speed: 0.5 });
});