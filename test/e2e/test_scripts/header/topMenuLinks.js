import { Selector } from 'testcafe';

fixture`Top-menu links verification`
  .page`https://www-test.adtechmedia.io/`;

test('Check "CHALLENGES" top-menu link is displayed on the page header', async t => {
  const challengesTopMenuLink = await Selector('.clearfix > li:nth-child(1) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(challengesTopMenuLink.exists).ok()
    .expect(challengesTopMenuLink.innerText).eql('CHALLENGES');
});

test('Check "SOLUTIONS" top-menu link is displayed on the page header', async t => {
  const solutionsTopMenuLink = await Selector('.clearfix > li:nth-child(2) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(solutionsTopMenuLink.exists).ok()
    .expect(solutionsTopMenuLink.innerText).eql('SOLUTIONS');
});

test('Check "API" top-menu link is displayed on the page header', async t => {
  const apiTopMenuLink = await Selector('.clearfix > li:nth-child(3) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(apiTopMenuLink.exists).ok()
    .expect(apiTopMenuLink.innerText).eql('API');
});

test('Check "TEAM" top-menu link is displayed on the page header', async t => {
  const teamTopMenuLink = await Selector('.clearfix > li:nth-child(4) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(teamTopMenuLink.exists).ok()
    .expect(teamTopMenuLink.innerText).eql('TEAM');
});

test('Check "CONTACT" top-menu link is displayed on the page header', async t => {
  const contactTopMenuLink = await Selector('.clearfix > li:nth-child(5) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(contactTopMenuLink.exists).ok()
    .expect(contactTopMenuLink.innerText).eql('CONTACT');
});

test('Check "BLOG" top-menu link is displayed on the page header', async t => {
  const blogTopMenuLink = await Selector('.clearfix > li:nth-child(6) > a');

  await t
    .resizeWindow(1920, 1080)
    .expect(blogTopMenuLink.exists).ok()
    .expect(blogTopMenuLink.innerText).eql('BLOG');
});
