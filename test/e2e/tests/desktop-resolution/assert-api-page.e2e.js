import { Selector } from 'testcafe';
import config from '../../config.cfg';
import Api from '../../poms/pages/api.po';
import sharedFunctions from '../../shared-func';

const api = new Api();

const fix = fixture`Check valid content is displayed on "API" page`
  .page`${config.www_base_host}/api`;

sharedFunctions.fictureResize(fix);
   
test('Assert "Case-Studies" content is displayed on "API" page', async t => {
  await t
    .expect(sharedFunctions.visible(api.caseStudies)).ok()
    .expect(api.caseStudies.innerText).contains('Want to learn about what you can achieve by integrating with our APIs? The possibilities are endless, but you can find just a few examples');
});

test('Assert "API-Docs" content is displayed on "API" page', async t => {
  await t  
    .expect(sharedFunctions.visible(api.elementApiDocs)).ok()
    .expect(api.elementApiDocs.innerText).contains('See what APIs we have on offer, including extensive documentation. Sign in to manage your subscriptions, see your current usage, get your API Key, and test against our live API.');
});

test('Assert "User-Guide" content is displayed on "API" page', async t => {
  await t
    .expect(sharedFunctions.visible(api.elementUserGuide)).ok()
    .expect(api.elementUserGuide.innerText).contains('Ready to get started? This is the place that answers all your questions. We\'ll have you up and running in no time. Let\'s get started!');
});