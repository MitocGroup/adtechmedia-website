import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Header from '../../poms/components/header.po';
import Home from '../../poms/pages/home.po';
import sharedFunctions from '../../shared-func';

const header = new Header();
const home = new Home();

const fix = fixture`Check menu visibility for mobile resolution`
  .page`${config.www_base_host}`;

sharedFunctions.fictureResize(fix, 'mobile');

test('Check "Top Menu" with included links is visible for mobile view and can be expanded by the click', async t => {
  await t
    .expect(sharedFunctions.visible(home.mobileMenu)).ok()
    .hover(home.mobileMenu)
    .click(home.mobileMenu, { speed: 0.5 });

    await t
    .expect(sharedFunctions.visible(header.challengesTopMenuLink)).ok()  
    .expect(header.challengesTopMenuLink.innerText).contains('CHALLENGES');

    await t
    .expect(sharedFunctions.visible(header.solutionsTopMenuLink)).ok()  
    .expect(header.solutionsTopMenuLink.innerText).contains('SOLUTIONS');

    await t
    .expect(sharedFunctions.visible(header.apiTopMenuLink)).ok()  
    .expect(header.apiTopMenuLink.innerText).contains('API');

    await t
    .expect(sharedFunctions.visible(header.teamTopMenuLink)).ok()  
    .expect(header.teamTopMenuLink.innerText).contains('TEAM');

    await t
    .expect(sharedFunctions.visible(header.contactTopMenuLink)).ok()  
    .expect(header.contactTopMenuLink.innerText).contains('CONTACT');
    
    await t  
    .expect(sharedFunctions.visible(header.blogTopMenuLink)).ok()  
    .expect(header.blogTopMenuLink.innerText).contains('BLOG');
});


