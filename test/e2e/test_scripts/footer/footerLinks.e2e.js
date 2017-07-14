import { Selector } from 'testcafe';

fixture`Footer links verification`
  .page`https://www-test.adtechmedia.io/`;

test('Check "Terms of Use" footer link is displayed on the page footer', async t => {
  const termsOfUse = await Selector('a').withText('Terms of Use');

  await t
    .resizeWindow(1920, 1080)
    .expect(termsOfUse.exists).ok()
    .expect(termsOfUse.innerText).eql('Terms of Use');
});

test('Check "Privacy Policy" footer link is displayed on the page footer', async t => {
  const privacyPolicy = await Selector('a').withText('Privacy Policy');

  await t
    .resizeWindow(1920, 1080)
    .expect(privacyPolicy.exists).ok()
    .expect(privacyPolicy.innerText).eql('Privacy Policy');
});
