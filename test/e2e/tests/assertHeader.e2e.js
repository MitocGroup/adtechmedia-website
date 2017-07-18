import { Selector } from 'testcafe';
import Header from '../pages/header.po';

const header = new Header();

fixture`Check valid content is displayed on website header`
  .page`https://www-stage.adtechmedia.io/`;

test('Check "CHALLENGES" top-menu link is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.challengesTopMenuLink.exists).ok()
    .expect(header.challengesTopMenuLink.innerText).eql('CHALLENGES');
});

test('Check "Logo" image is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.logoImage.exists).ok();
});

test('Check "SOLUTIONS" top-menu link is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.solutionsTopMenuLink.exists).ok()
    .expect(header.solutionsTopMenuLink.innerText).eql('SOLUTIONS');
});

test('Check "API" top-menu link is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.apiTopMenuLink.exists).ok()
    .expect(header.apiTopMenuLink.innerText).eql('API');
});

test('Check "TEAM" top-menu link is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.teamTopMenuLink.exists).ok()
    .expect(header.teamTopMenuLink.innerText).eql('TEAM');
});

test('Check "CONTACT" top-menu link is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.contactTopMenuLink.exists).ok()
    .expect(header.contactTopMenuLink.innerText).eql('CONTACT');
});

test('Check "BLOG" top-menu link is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.blogTopMenuLink.exists).ok()
    .expect(header.blogTopMenuLink.innerText).eql('BLOG');
});

test('Check "Request a Demo" modal is displayed on website header', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(header.topMenuRequestDemoModal.exists).ok();
});
