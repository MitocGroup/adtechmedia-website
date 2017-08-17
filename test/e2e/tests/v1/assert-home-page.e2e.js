import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Home from '../../poms/pages/home.po';

const home = new Home();

fixture`Check valid content is displayed on "Home" page`
  .page`${config.www_base_host}`

  .beforeEach(async t => {
    await t
      .resizeWindow(1280, 600);  
  });

test('Check "Request a Demo" modal is displayed on "Home" page and can be opened by the click', async t => {
  await t
    .expect(sharedFunctions.visible(home.requestDemoModal)).ok()
    .hover(home.requestDemoModal)
    .click(home.requestDemoModal, { speed: 0.5 })
    .click(home.requestDemoModalClose, { speed: 0.5 });
});

test('Check "Watch now" modal is displayed on "Home" page and can be opened by the click', async t => {
  await t
    .expect(sharedFunctions.visible(home.watchNowModal)).ok()
    .hover(home.watchNowModal)
    .click(home.watchNowModal, { speed: 0.5 })
    .click(home.watchNowModalClose, { speed: 0.5 });
});
