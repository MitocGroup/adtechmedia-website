import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Home from '../../poms/pages/home.po';
import sharedFunctions from '../../shared-func';

const home = new Home();

const fix = fixture`Check valid content is displayed on "Home" page`
  .page`${config.www_base_host}`;

sharedFunctions.fictureResize(fix);

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
