import { Selector } from 'testcafe';

export default class requestDemoPage {
  constructor() {
    this.demoFormEmailField = Selector('#mce-EMAIL');
    this.demoFormNamelField = Selector('#mce-FNAME');
    this.demoFormSubmitButton = Selector('#mc-embedded-subscribe');
    this.demoFormResponseText = Selector('.demo-confirm');
  }
};





