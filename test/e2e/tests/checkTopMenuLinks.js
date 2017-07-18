import { Selector } from 'testcafe';
import TopMenu from '../pages/top-menu.po';

const topMemu = new TopMenu();

fixture`Top-menu links verification`
  .page`https://www-test.adtechmedia.io/`;

test('Check "CHALLENGES" top-menu link is displayed on the page header', async t => {

  await t
    .resizeWindow(1920, 1080)
    .expect(topMemu.challengesTopMenuLink.exists).ok()
    .expect(topMemu.challengesTopMenuLink.innerText).eql('CHALLENGES');
});

test('Check "SOLUTIONS" top-menu link is displayed on the page header', async t => {

  await t
    .resizeWindow(1920, 1080)
    .expect(topMemu.solutionsTopMenuLink.exists).ok()
    .expect(topMemu.solutionsTopMenuLink.innerText).eql('SOLUTIONS');
});

test('Check "API" top-menu link is displayed on the page header', async t => {

  await t
    .resizeWindow(1920, 1080)
    .expect(topMemu.apiTopMenuLink.exists).ok()
    .expect(topMemu.apiTopMenuLink.innerText).eql('API');
});

test('Check "TEAM" top-menu link is displayed on the page header', async t => {

  await t
    .resizeWindow(1920, 1080)
    .expect(topMemu.teamTopMenuLink.exists).ok()
    .expect(topMemu.teamTopMenuLink.innerText).eql('TEAM');
});

test('Check "CONTACT" top-menu link is displayed on the page header', async t => {

  await t
    .resizeWindow(1920, 1080)
    .expect(topMemu.contactTopMenuLink.exists).ok()
    .expect(topMemu.contactTopMenuLink.innerText).eql('CONTACT');
});

test('Check "BLOG" top-menu link is displayed on the page header', async t => {

  await t
    .resizeWindow(1920, 1080)
    .expect(topMemu.blogTopMenuLink.exists).ok()
    .expect(topMemu.blogTopMenuLink.innerText).eql('BLOG');
});
