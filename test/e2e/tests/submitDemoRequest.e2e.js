import { Selector } from 'testcafe';
import RequestDemoPage from '../pages/demo-modal.po';

fixture`"Request a Demo" form submit verification`
  .page`https://www-test.adtechmedia.io/`;

test('Check if user can submit "Request a demo" form with valid email address', async t => {
  // const topMenu = new topMenu();
  const requestDemoTopMenuItem = await Selector('.custom-menu-link > a');

  await t
    .resizeWindow(1920, 1080)
    .click(requestDemoTopMenuItem, { speed: 0.5 })
    .expect(Selector('#modal').with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok();

  const requestDemoPage = new RequestDemoPage();

  await t
    .typeText(requestDemoPage.demoFormEmailField, 'sakusha@yahoo.ca')
    .typeText(requestDemoPage.demoFormNamelField, 'Test User')
    .click(requestDemoPage.demoFormSubmitButton, { speed: 0.5 });

  await t
    .expect(Selector(requestDemoPage.demoFormResponseText).with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(Selector(requestDemoPage.demoFormResponseText).innerText).eql('\nThank you for the interest in AdTechMedia WordPress Plugin\nPlease check your inbox to schedule your demo.\n');
});
