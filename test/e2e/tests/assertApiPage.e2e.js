import { Selector } from 'testcafe';
import ApiPage from '../pages/api-page.po';

const apiPage = new ApiPage();

fixture`Check valid content is displayed on "API" page`
  .page`https://www-stage.adtechmedia.io/api/`;

test('Assert "Case Studies" content is displayed on "API" page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(apiPage.apiPageCaseStudies.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(apiPage.apiPageCaseStudies.innerText).eql('\nWant to learn about what you can achieve by integrating with our APIs? The possibilities are endless, but you can find just a few examples\n MORE\n')
});

test('Assert "API-Docs" content is displayed on "API" page', async t => {
  await t
    .expect(apiPage.pageElementApiDocs.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(apiPage.pageElementApiDocs.innerText).eql('\nSee what APIs we have on offer, including extensive documentation. Sign in to manage your subscriptions, see your current usage, get your API Key, and test against our live API.\n MORE\n');
});

test('Assert "User-Guide" content is displayed on "API" page', async t => {
  await t
    .expect(apiPage.pageElementUserGuide.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(apiPage.pageElementUserGuide.innerText).eql('\nReady to get started? This is the place that answers all your questions. We\'ll have you up and running in no time. Let\'s get started!\n MORE\n');
});