import { Selector } from 'testcafe';
import config from '../config';
import libs from '../libs';
import Contact from '../pages/contact-page.po';

const contact = new Contact();

fixture`Check "Contact" form request submit`
  .page`${config.www_base_host}/contact`
  .beforeEach(async t => {
    await t
      .resizeWindow(1920, 1080);
  });

test('Check "Contact" form request can be submitted by user with valid data', async t => {
  await t
    .expect(contact.formModal.exists).ok();

  await t
    .expect(contact.nameField.exists).ok()
    .expect(contact.phoneField.exists).ok()
    .expect(contact.emailField.exists).ok()
    .expect(contact.messageField.exists).ok();

  await t
    .typeText(contact.nameField, libs.chance.name())
    .typeText(contact.phoneField, libs.chance.phone())
    .typeText(contact.emailField, libs.chance.email())
    .typeText(contact.messageField, libs.chance.word());

  await t
    .hover(contact.submitButton)
    .click(contact.submitButton, { speed: 0.5 });
});