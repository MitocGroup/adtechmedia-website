import { Selector } from 'testcafe';
import config from '../config';
import Selectors from '../pages/challenges-page.po';

const selectors = new Selectors();

fixture`Check valid content is displayed on "Challenges" page`
  .page`${config.www_base_host}/challenges/`
  .beforeEach(async t => {
    await t
      .resizeWindow(1920, 1080);
  });

test('Check "Request a Demo" modal is displayed on "Challenges" page and can be opened by the click', async t => {
  await t
    .expect(selectors.challengesRequestDemoModal.exists).ok();

  await t
    .hover(selectors.challengesRequestDemoModal)
    .click(selectors.challengesRequestDemoModal, { speed: 0.5 })
    .click(selectors.challengesRequestDemoModalClose, { speed: 0.5 });
});





