import { Selector } from 'testcafe';
import FooterLinks from '../pages/footer.po';

const footerLinks = new FooterLinks();

fixture`Check valid content and links are displayed on website footer`
  .page`https://www-stage.adtechmedia.io/`;

test('Check "Mitoc Group" link is displayed on the page footer', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(footerLinks.company.exists).ok()
    .expect(footerLinks.company.innerText).eql('Mitoc Group');
});

test('Check "Terms of Use" link is displayed on the page footer', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(footerLinks.termsOfUse.exists).ok()
    .expect(footerLinks.termsOfUse.innerText).eql('Terms of Use');
});

test('Check "Privacy Policy" link is displayed on the page footer', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(footerLinks.privacyPolicy.exists).ok()
    .expect(footerLinks.privacyPolicy.innerText).eql('Privacy Policy');
});
