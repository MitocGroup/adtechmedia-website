import { Selector } from 'testcafe';
import config from '../config';
import Selectors from '../pages/contact-page.po';

const selectors = new Selectors();

fixture`Check valid content is displayed on "Contact" page`
  .page`${config.www_base_host}/contact/`
  .beforeEach(async t => {
    await t
      .resizeWindow(1920, 1080);
  });

test('Check "Contact" form is displayed on "Contact" page', async t => {
  await t
    .expect(selectors.contactGoogleMap.exists).ok();
});  

test('Check "Google Map" is displayed on "Contact" page', async t => {
  await t
    .expect(selectors.contactGoogleMap.exists).ok();
});





