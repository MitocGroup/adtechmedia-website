import { Selector } from 'testcafe';
import config from '../config';
import HomePage from '../pages/home-page.po';

const homePage = new HomePage();

fixture`Check valid content is displayed on "Home" page`
  .page`${config.www_base_host}`
  .beforeEach(async t => {
    await t
      .resizeWindow(1920, 1080);
  });

test('Check "Request a Demo" modal is displayed on "Home" page and can be opened by the click', async t => {
  await t
    .expect(homePage.homeRequestDemoModal.exists).ok();

  await t
    .hover(homePage.homeRequestDemoModal)
    .click(homePage.homeRequestDemoModal, { speed: 0.5 })
    .click(homePage.homeRequestDemoModalClose, { speed: 0.5 });
});

test('Check "Watch now" modal is displayed on "Home" page and can be opened by the click', async t => {
  await t
    .expect(homePage.homeWatchNowModal.exists).ok();

  await t
    .hover(homePage.homeWatchNowModal)
    .click(homePage.homeWatchNowModal, { speed: 0.5 })
    .click(homePage.homeWatchNowModalClose, { speed: 0.5 });
});





