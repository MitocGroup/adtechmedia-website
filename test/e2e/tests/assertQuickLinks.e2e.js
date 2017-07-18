import { Selector } from 'testcafe';
import QuickLinks from '../pages/quick-links.po';

const quickLinks = new QuickLinks();

fixture`Check valid links are displayed on "Quick Links" area`
  .page`https://www-stage.adtechmedia.io/`;

test('Check "Challenges" quick-link is clickable and valid information is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(quickLinks.challengesQuickLink.exists).ok()
    .hover(quickLinks.challengesQuickLink)
    .click(quickLinks.challengesQuickLink)

  const pageElementChallenges = await Selector('.main-slide > section > h1');

  await t
    .expect(pageElementChallenges.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementChallenges.innerText).eql('Challenges');
});

test('Check "Solutions" quick-link is clickable and valid information is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(quickLinks.solutionsQuickLink.exists).ok()
    .hover(quickLinks.solutionsQuickLink)
    .click(quickLinks.solutionsQuickLink)

  const pageElementSolutions = await Selector('.custom-headline');

  await t
    .expect(pageElementSolutions.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementSolutions.innerText).eql('SOLUTIONS');
});

test('Check "API" quick-link is clickable and valid information is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(quickLinks.apiQuickLink.exists).ok()
    .hover(quickLinks.apiQuickLink)
    .click(quickLinks.apiQuickLink)

  const pageElementApiFirst = await Selector('.flex-item-4:nth-child(1)');

  await t
    .expect(pageElementApiFirst.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementApiFirst.innerText).eql('\nWant to learn about what you can achieve by integrating with our APIs? The possibilities are endless, but you can find just a few examples\n MORE\n')

  const pageElementApiSecond = await Selector('.flex-item-4:nth-child(2)');

  await t
    .expect(pageElementApiSecond.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementApiSecond.innerText).eql('\nSee what APIs we have on offer, including extensive documentation. Sign in to manage your subscriptions, see your current usage, get your API Key, and test against our live API.\n MORE\n')

  const pageElementApiThird = await Selector('.flex-item-4:nth-child(3)');

  await t
    .expect(pageElementApiThird.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementApiThird.innerText).eql('\nReady to get started? This is the place that answers all your questions. We\'ll have you up and running in no time. Let\'s get started!\n MORE\n');
});

test('Check "Team" quick-link link is clickable and valid information is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(quickLinks.teamQuickLink.exists).ok()
    .hover(quickLinks.teamQuickLink)
    .click(quickLinks.teamQuickLink)

  const pageElementTeam = await Selector('.custom-headline-block');

  await t
    .expect(pageElementTeam.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementTeam.innerText).eql('TEAM\nWe are a team of highly skilled and very passioned product engineers who dedicated years of building high quality technical solutions that solve large scale business problems.\n');
});

test('Check "Contact" quick-link is clickable and valid information is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(quickLinks.contactQuickLink.exists).ok()
    .hover(quickLinks.contactQuickLink)
    .click(quickLinks.contactQuickLink)

  const pageElementContact = await Selector('#contact:nth-child(1) > form > h1');

  await t
    .expect(pageElementContact.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementContact.innerText).eql('Contact');
});

test('Check "Blog" quick-link is clickable and valid information is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(quickLinks.blogQuickLink.exists).ok()
    .hover(quickLinks.blogQuickLink)
    .click(quickLinks.blogQuickLink)

  const pageElementBlog = await Selector('.collectionHeader-blockNav > div > nav > div > li:nth-child(1) > a');

  await t
    .expect(pageElementBlog.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementBlog.innerText).eql('AD BLOCKING');
});
