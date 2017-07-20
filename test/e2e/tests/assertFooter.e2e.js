import { Selector } from 'testcafe';
import config from '../config';
import FooterLinks from '../pages/footer.po';

const footerLinks = new FooterLinks();

fixture`Check valid content and links are displayed on website footer`
  .page`${config.www_base_host}`
  .beforeEach(async t => {
    await t
      .resizeWindow(1920, 1080);
  });

test('Check "Mitoc Group" link is displayed on the page footer', async t => {
  await t
    .expect(footerLinks.company.exists).ok()
    .expect(footerLinks.company.innerText).contains('Mitoc Group');
});

test('Check "Terms of Use" link is displayed on the page footer', async t => {
  await t
    .expect(footerLinks.termsOfUse.exists).ok()
    .expect(footerLinks.termsOfUse.innerText).contains('Terms of Use');
});

test('Check "Privacy Policy" link is displayed on the page footer', async t => {
  await t
    .expect(footerLinks.privacyPolicy.exists).ok()
    .expect(footerLinks.privacyPolicy.innerText).contains('Privacy Policy');
});
