import { Selector } from 'testcafe';

fixture`"Request a Demo" form submit verification`
  .page`https://www-test.adtechmedia.io/`;

test('Check if user can submit "Request a demo" form with valid email address', async t => {
  const requestDemoTopMenuItem = await Selector('.custom-menu-link > a');

  await t
    .resizeWindow(1920, 1080)
    .click(requestDemoTopMenuItem, { speed: 0.5 })
    .expect(Selector('#modal').with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()

  const demoFormEmailField = await Selector('#mce-EMAIL')
  const demoFormNamelField = await Selector('#mce-FNAME')
  const demoFormSubmitButton = await Selector('#mc-embedded-subscribe');

  await t
    .typeText(demoFormEmailField, 'sakusha@yahoo.ca')
    .typeText(demoFormNamelField, 'Test User')
    .click(demoFormSubmitButton, { speed: 0.5 })

  const demoFormResponseText = await Selector('.demo-confirm');

  await t
    .expect(Selector(demoFormResponseText).with({
      selectorTimeout: 5000,
      visibilityCheck: true,
    }).visible).ok()
    .expect(Selector(demoFormResponseText).innerText).eql('\nThank you for the interest in AdTechMedia WordPress Plugin\nPlease check your inbox to schedule your demo.\n');
});
