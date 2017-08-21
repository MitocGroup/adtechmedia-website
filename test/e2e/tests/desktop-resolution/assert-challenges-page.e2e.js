import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Challenges from '../../poms/pages/challenges.po';
import sharedFunctions from '../../shared-func';

const challenges = new Challenges();

const fix = fixture`Check valid content is displayed on "Challenges" page`
  .page`${config.www_base_host}/challenges`;

sharedFunctions.fictureResize(fix);  

test('Check "Request a Demo" modal is displayed on "Challenges" page and can be opened by the click', async t => {
  await t
    .expect(challenges.requestDemoModal.exists).ok()
    .hover(challenges.requestDemoModal)
    .click(challenges.requestDemoModal, { speed: 0.5 })
    .click(challenges.requestDemoModalClose, { speed: 0.5 });
});