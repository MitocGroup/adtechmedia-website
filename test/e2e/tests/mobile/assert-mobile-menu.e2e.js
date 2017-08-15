import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Header from '../../poms/components/header.po';
import Home from '../../poms/pages/home.po';

const header = new Header();
const home = new Home();

fixture`Check menu visibility for mobile resolution`
  .page`${config.www_base_host}`
  
  .beforeEach(async t => {
    await t
      .resizeWindow(400, 600);
  });

test('Check "Top Menu" with included links is visible for mobile view and can be expanded by the click', async t => {
  await t
    .expect(home.mobileMenu.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(home.mobileMenu)
    .click(home.mobileMenu, { speed: 0.5 });

    await t
    .expect(header.challengesTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.challengesTopMenuLink.innerText).contains('CHALLENGES');

    await t
    .expect(header.solutionsTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.solutionsTopMenuLink.innerText).contains('SOLUTIONS');

    await t
    .expect(header.apiTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.apiTopMenuLink.innerText).contains('API');

    await t
    .expect(header.teamTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.teamTopMenuLink.innerText).contains('TEAM');

    await t
    .expect(header.contactTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.contactTopMenuLink.innerText).contains('CONTACT');
    
    await t
    .expect(header.blogTopMenuLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(header.blogTopMenuLink.innerText).contains('BLOG');
});


