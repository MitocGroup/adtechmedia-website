import { Selector } from 'testcafe';
import HomePage from '../pages/home-page.po';
import RequestDemoForm from '../pages/demo-modal.po';

fixture`Check "Request a Demo" form submit`
  .page`https://www-stage.adtechmedia.io/`;

test('Check user can submit "Request a demo" form with valid email address', async t => {
  const homePage = new HomePage();

  await t
    .resizeWindow(1920, 1080)
    .click(homePage.homeRequestDemoModal, { speed: 0.5 })
    .expect(Selector('#modal').with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok();

  const requestDemoForm = new RequestDemoForm();

  await t
    .typeText(requestDemoForm.demoFormEmailField, 'hellfire@yahoo.com')
    .typeText(requestDemoForm.demoFormNamelField, 'Test User')
    .click(requestDemoForm.demoFormSubmitButton, { speed: 0.5 });

  await t
    .expect(Selector(requestDemoForm.demoFormResponseText).with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(Selector(requestDemoForm.demoFormResponseText).innerText).eql('\nThank you for the interest in AdTechMedia WordPress Plugin\nPlease check your inbox to schedule your demo.\n');
});
