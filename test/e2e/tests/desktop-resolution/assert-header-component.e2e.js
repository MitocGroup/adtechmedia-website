import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Header from '../../poms/components/header.po';
import sharedFunctions from '../../shared-func.js';

const header = new Header();

const fix = fixture`Check valid content is displayed on website header`
  .page`${config.www_base_host}`;

sharedFunctions.fictureResize(fix);

test('Check "Logo" image is displayed on website header', async t => {
  await t
    .expect(sharedFunctions.visible(header.logoImage)).ok()
});

test('Check "CHALLENGES" top-menu link is displayed on website header', async t => {
  await t
    .expect(sharedFunctions.visible(header.challengesTopMenuLink)).ok()
    .expect(header.challengesTopMenuLink.innerText).match(
      sharedFunctions.anyCase('CHALLENGES')
    );
});

test('Check "SOLUTIONS" top-menu link is displayed on website header', async t => {
  await t
    .expect(sharedFunctions.visible(header.solutionsTopMenuLink)).ok()
    .expect(header.solutionsTopMenuLink.innerText).match(
      sharedFunctions.anyCase('SOLUTIONS')
    );
});

test('Check "API" top-menu link is displayed on website header', async t => {
  await t
    .expect(sharedFunctions.visible(header.apiTopMenuLink)).ok()
    .expect(header.apiTopMenuLink.innerText).match(
      sharedFunctions.anyCase('API')
    );
});

test('Check "TEAM" top-menu link is displayed on website header', async t => {
  await t
    .expect(sharedFunctions.visible(header.teamTopMenuLink)).ok()
    .expect(header.teamTopMenuLink.innerText).match(
      sharedFunctions.anyCase('TEAM')
    );
});

test('Check "CONTACT" top-menu link is displayed on website header', async t => {
  await t
    .expect(sharedFunctions.visible(header.contactTopMenuLink)).ok()
    .expect(header.contactTopMenuLink.innerText).match(
      sharedFunctions.anyCase('CONTACT')
    );
});

test('Check "BLOG" top-menu link is displayed on website header', async t => {
  await t
    .expect(sharedFunctions.visible(header.blogTopMenuLink)).ok()
    .expect(header.blogTopMenuLink.innerText).match(
      sharedFunctions.anyCase('BLOG')
    );
});

test('Check "Request a Demo" modal is displayed on website header', async t => {
  await t 
    .expect(sharedFunctions.visible(header.topMenuRequestDemoModal)).ok()
    .click(header.topMenuRequestDemoModal);
});