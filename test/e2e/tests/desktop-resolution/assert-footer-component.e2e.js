import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Footer from '../../poms/components/footer.po';

const footer = new Footer();

fixture`Check valid content and links are displayed on website footer`
  .page`${config.www_base_host}`

  .beforeEach(async t => {
    await t
      .resizeWindow(1280, 600);  
  });

test('Check "Request a Demo" modal is displayed on page footer and can be opened by the click', async t => {
  await t
    .expect(footer.requestDemoModal.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(footer.requestDemoModal)
    .click(footer.requestDemoModal, { speed: 0.5 })
    .click(footer.requestDemoModalClose, { speed: 0.5 });
});

test('Check "Mitoc Group" link is displayed on the page footer', async t => {
  await t
    .expect(footer.company.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(footer.company.innerText).contains('Mitoc Group');
});

test('Check "Terms of Use" link is displayed on the page footer', async t => {
  await t
    .expect(footer.termsOfUse.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(footer.termsOfUse.innerText).contains('Terms of Use');
});

test('Check "Privacy Policy" link is displayed on the page footer', async t => {
  await t
    .expect(footer.privacyPolicy.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(footer.privacyPolicy.innerText).contains('Privacy Policy');
});
