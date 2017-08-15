import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Header from '../../poms/components/header.po';
import sharedFunctions from '../../shared-func.js';

const header = new Header();

fixture`Check valid content is displayed on website header`
  .page`${config.www_base_host}`

  .beforeEach(async t => {
    await t
      .resizeWindow(1280, 600);  
  });

test('Check "Logo" image is displayed on website header', async t => {
  await t
    .expect(header.logoImage.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
});

test('Check "CHALLENGES" top-menu link is displayed on website header', async t => {
  await t
    .expect(header.challengesTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.challengesTopMenuLink.innerText).match(
      sharedFunctions.anyCase('CHALLENGES')
    );
});

test('Check "SOLUTIONS" top-menu link is displayed on website header', async t => {
  await t
    .expect(header.solutionsTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.solutionsTopMenuLink.innerText).match(
      sharedFunctions.anyCase('SOLUTIONS')
    );
});

test('Check "API" top-menu link is displayed on website header', async t => {
  await t
    .expect(header.apiTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.apiTopMenuLink.innerText).match(
      sharedFunctions.anyCase('API')
    );
});

test('Check "TEAM" top-menu link is displayed on website header', async t => {
  await t
    .expect(header.teamTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.teamTopMenuLink.innerText).match(
      sharedFunctions.anyCase('TEAM')
    );
});

test('Check "CONTACT" top-menu link is displayed on website header', async t => {
  await t
    .expect(header.contactTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.contactTopMenuLink.innerText).match(
      sharedFunctions.anyCase('CONTACT')
    );
});

test('Check "BLOG" top-menu link is displayed on website header', async t => {
  await t
    .expect(header.blogTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.blogTopMenuLink.innerText).match(
      sharedFunctions.anyCase('BLOG')
    );
});

test('Check "Request a Demo" modal is displayed on website header', async t => {
  await t 
    .expect(header.topMenuRequestDemoModal.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .click(header.topMenuRequestDemoModal);
});