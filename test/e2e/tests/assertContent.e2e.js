import { Selector } from 'testcafe';

fixture`Top-menu links and content verification`
  .page`https://www-test.adtechmedia.io/`;

test('Check "Challenges" top-menu link is clickable and valid information is displayed on the page', async t => {
  const challengesTopMenuLink = await Selector('.clearfix > li:nth-child(1) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(challengesTopMenuLink.exists).ok()
    .hover(challengesTopMenuLink)
    .click(challengesTopMenuLink)

  const pageElementChallenges = await Selector('.main-slide > section > h1');

  await t
    .expect(pageElementChallenges.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementChallenges.innerText).eql('Challenges');
});

test('Check "Solutions" top-menu link is clickable and valid information is displayed on the page', async t => {
  const solutionsTopMenuLink = await Selector('.clearfix > li:nth-child(2) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(solutionsTopMenuLink.exists).ok()
    .hover(solutionsTopMenuLink)
    .click(solutionsTopMenuLink)

  const pageElementSolutions = await Selector('.custom-headline');

  await t
    .expect(pageElementSolutions.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementSolutions.innerText).eql('SOLUTIONS');
});

test('Check "API" top-menu link is clickable and valid information is displayed on the page', async t => {
  const apiTopMenuLink = await Selector('.clearfix > li:nth-child(3) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(apiTopMenuLink.exists).ok()
    .hover(apiTopMenuLink)
    .click(apiTopMenuLink)

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
    .expect(pageElementApiSecond.innerText).eql('\nSee what APIs we have on offer, including extensive documentation. Sign in to manage your subscriptions, see your current usage, get your API Key, and test against our live API.\n MORE\n');

  const pageElementApiThird = await Selector('.flex-item-4:nth-child(3)');

  await t
    .expect(pageElementApiThird.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementApiThird.innerText).eql('\nReady to get started? This is the place that answers all your questions. We\'ll have you up and running in no time. Let\'s get started!\n MORE\n');
});

test('Check "Team" top-menu link is clickable and valid information is displayed on the page', async t => {
  const teamTopMenuLink = await Selector('.clearfix > li:nth-child(4) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(teamTopMenuLink.exists).ok()
    .hover(teamTopMenuLink)
    .click(teamTopMenuLink)

  const pageElementTeam = await Selector('.custom-headline-block');

  await t
    .expect(pageElementTeam.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementTeam.innerText).eql('TEAM\nWe are a team of highly skilled and very passioned product engineers who dedicated years of building high quality technical solutions that solve large scale business problems.\n');
});

test('Check "Contact" top-menu link is clickable and valid information is displayed on the page', async t => {
  const contactTopMenuLink = await Selector('.clearfix > li:nth-child(5) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(contactTopMenuLink.exists).ok()
    .hover(contactTopMenuLink)
    .click(contactTopMenuLink)

  const pageElementContact = await Selector('#contact:nth-child(1) > form > h1');

  await t
    .expect(pageElementContact.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementContact.innerText).eql('Contact');
});

test('Check "Blog" top-menu link is clickable and valid information is displayed on the page', async t => {
  const blogTopMenuLink = await Selector('.clearfix > li:nth-child(6) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(blogTopMenuLink.exists).ok()
    .hover(blogTopMenuLink)
    .click(blogTopMenuLink)

  const pageElementBlog = await Selector('.collectionHeader-blockNav > div > nav > div > li:nth-child(1) > a');

  await t
    .expect(pageElementBlog.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(pageElementBlog.innerText).eql('AD BLOCKING');
});
