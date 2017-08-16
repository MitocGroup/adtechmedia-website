import { Selector } from 'testcafe';
import config from '../../config.cfg';
import SocialLinks from '../../poms/components/social-links.po';
import sharedFunctions from '../../shared-func';

const socialLinks = new SocialLinks();

const fix = fixture`Check valid links are displayed on "Social Links" area`
  .page`${config.www_base_host}`;

sharedFunctions.fictureResize(fix);

test('Check "WordPress" clickable link is displayed on the page', async t => {
  await t
    .expect(sharedFunctions.visible(socialLinks.wordpressLink)).ok()
    .hover(socialLinks.wordpressLink)
    .click(socialLinks.wordpressLink);
});

test('Check "Drupal" clickable link is displayed on the page', async t => {
  await t
    .expect(sharedFunctions.visible(socialLinks.drupalLink)).ok()
    .hover(socialLinks.drupalLink)
    .click(socialLinks.drupalLink);
});

test('Check "Github" clickable link is displayed on the page', async t => {
  await t
    .expect(sharedFunctions.visible(socialLinks.githubLink)).ok()
    .hover(socialLinks.githubLink)
    .click(socialLinks.githubLink);
});

test('Check "Linkedin" clickable link is displayed on the page', async t => {
  await t
    .expect(sharedFunctions.visible(socialLinks.linkedinLink)).ok()
    .hover(socialLinks.linkedinLink)
    .click(socialLinks.linkedinLink);
});

test('Check "Twitter" clickable link is displayed on the page', async t => {
  await t
    .expect(sharedFunctions.visible(socialLinks.twitterLink)).ok()
    .hover(socialLinks.twitterLink)
    .click(socialLinks.twitterLink);
});

test('Check "Facebook" clickable link is displayed on the page', async t => {
  await t
    .expect(sharedFunctions.visible(socialLinks.facebookLink)).ok()
    .hover(socialLinks.facebookLink)
    .click(socialLinks.facebookLink);
});

test('Check "YouTube" clickable link is displayed on the page', async t => {
  await t
    .expect(sharedFunctions.visible(socialLinks.youtubeLink)).ok()
    .hover(socialLinks.youtubeLink)
    .click(socialLinks.youtubeLink);
});