import { Selector } from 'testcafe';
import config from '../../config.cfg';
import libs from '../../libs.cfg';
import ContactForm from '../../poms/forms/contact-form.po';

const contactForm = new ContactForm();

fixture`Check "Contact" form request submit`
  .page`${config.www_base_host}/contact`
  
  .beforeEach(async t => {
    await t
      .resizeWindow(400, 600);
  });

test('Check "Contact" form request can be submitted by user with valid data', async t => {
  await t
    .expect(contactForm.formModal.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .typeText(contactForm.nameField, libs.chance.name())
    .typeText(contactForm.phoneField, libs.chance.phone())
    .typeText(contactForm.emailField, libs.chance.email())
    .typeText(contactForm.messageField, libs.chance.word())
    .hover(contactForm.submitButton)
    .click(contactForm.submitButton, { speed: 0.5 });
});