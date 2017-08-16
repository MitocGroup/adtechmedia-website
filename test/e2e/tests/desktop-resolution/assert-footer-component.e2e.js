import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Footer from '../../poms/components/footer.po';
import sharedFunctions from '../../shared-func';

const footer = new Footer();

const fix = fixture`Check valid content and links are displayed on website footer`
  .page`${config.www_base_host}`;

sharedFunctions.fictureResize(fix);

test('Check "Request a Demo" modal is displayed on page footer and can be opened by the click', async t => {
  await t
    .expect(sharedFunctions.visible(footer.requestDemoModal)).ok()
    .hover(footer.requestDemoModal)
    .click(footer.requestDemoModal, { speed: 0.5 })
    .click(footer.requestDemoModalClose, { speed: 0.5 });
});

test('Check "Mitoc Group" link is displayed on the page footer', async t => {
  await t
    .expect(sharedFunctions.visible(footer.company)).ok()
    .expect(footer.company.innerText).contains('Mitoc Group');
});

test('Check "Terms of Use" link is displayed on the page footer', async t => {
  await t
    .expect(sharedFunctions.visible(footer.termsOfUse)).ok()
    .expect(footer.termsOfUse.innerText).contains('Terms of Use');
});

test('Check "Privacy Policy" link is displayed on the page footer', async t => {
  await t
    .expect(sharedFunctions.visible(footer.privacyPolicy)).ok()
    .expect(footer.privacyPolicy.innerText).contains('Privacy Policy');
});
