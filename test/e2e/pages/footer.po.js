import { Selector } from 'testcafe';

export default class footerLinks {
  constructor() {
    this.termsOfUse = Selector('a').withText('Terms of Use');
    this.privacyPolicy = Selector('a').withText('Privacy Policy');
  }
};





