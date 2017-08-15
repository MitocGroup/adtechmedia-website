import { Selector } from 'testcafe';
import config from '../../config.cfg';
import SocialLinks from '../../poms/components/social-links.po';

const socialLinks = new SocialLinks();

fixture`Check valid links are displayed on "Social Links" area`
  .page`${config.www_base_host}`

  .beforeEach(async t => {
    await t
      .resizeWindow(1280, 600);  
  });

test('Check "WordPress" clickable link is displayed on the page', async t => {
  await t
    .expect(socialLinks.wordpressLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(socialLinks.wordpressLink)
    .click(socialLinks.wordpressLink);
});

test('Check "Drupal" clickable link is displayed on the page', async t => {
  await t
    .expect(socialLinks.drupalLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(socialLinks.drupalLink)
    .click(socialLinks.drupalLink);
});

test('Check "Github" clickable link is displayed on the page', async t => {
  await t
    .expect(socialLinks.githubLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(socialLinks.githubLink)
    .click(socialLinks.githubLink);
});

test('Check "Linkedin" clickable link is displayed on the page', async t => {
  await t
    .expect(socialLinks.linkedinLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(socialLinks.linkedinLink)
    .click(socialLinks.linkedinLink);
});

test('Check "Twitter" clickable link is displayed on the page', async t => {
  await t
    .expect(socialLinks.twitterLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(socialLinks.twitterLink)
    .click(socialLinks.twitterLink);
});

test('Check "Facebook" clickable link is displayed on the page', async t => {
  await t
    .expect(socialLinks.facebookLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(socialLinks.facebookLink)
    .click(socialLinks.facebookLink);
});

test('Check "YouTube" clickable link is displayed on the page', async t => {
  await t
    .expect(socialLinks.youtubeLink.with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .hover(socialLinks.youtubeLink)
    .click(socialLinks.youtubeLink);
});