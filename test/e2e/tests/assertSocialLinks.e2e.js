import { Selector } from 'testcafe';
import SocialLinks from '../pages/social-links.po';

const socialLinks = new SocialLinks();

fixture`Check valid links are displayed on "Social Links" area`
  .page`https://www-stage.adtechmedia.io/`;

test('Check "WordPress" clickable link is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(socialLinks.wordpressLink.exists).ok()
    .hover(socialLinks.wordpressLink)
    .click(socialLinks.wordpressLink);
});

test('Check "Drupal" clickable link is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(socialLinks.drupalLink.exists).ok()
    .hover(socialLinks.drupalLink)
    .click(socialLinks.drupalLink);
});

test('Check "Github" clickable link is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(socialLinks.githubLink.exists).ok()
    .hover(socialLinks.githubLink)
    .click(socialLinks.githubLink);
});

test('Check "Linkedin" clickable link is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(socialLinks.linkedinLink.exists).ok()
    .hover(socialLinks.linkedinLink)
    .click(socialLinks.linkedinLink);
});

test('Check "Twitter" clickable link is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(socialLinks.twitterLink.exists).ok()
    .hover(socialLinks.twitterLink)
    .click(socialLinks.twitterLink);
});

test('Check "Facebook" clickable link is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(socialLinks.facebookLink.exists).ok()
    .hover(socialLinks.facebookLink)
    .click(socialLinks.facebookLink);
});

test('Check "Facebook" clickable link is displayed on the page', async t => {
  await t
    .resizeWindow(1920, 1080)
    .expect(socialLinks.youtubeLink.exists).ok()
    .hover(socialLinks.youtubeLink)
    .click(socialLinks.youtubeLink);
});