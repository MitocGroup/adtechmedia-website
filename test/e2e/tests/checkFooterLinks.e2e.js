import { Selector } from 'testcafe';
import FooterLinks from '../pages/footer.po';

const footerLinks = new FooterLinks();

fixture`Footer links verification`
  .page`https://www-test.adtechmedia.io/`;

test('Check "Terms of Use" footer link is displayed on the page footer', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(footerLinks.termsOfUse.exists).ok()
    .expect(footerLinks.termsOfUse.innerText).eql('Terms of Use');
});

test('Check "Privacy Policy" footer link is displayed on the page footer', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(footerLinks.privacyPolicy.exists).ok()
    .expect(footerLinks.privacyPolicy.innerText).eql('Privacy Policy');
});
