import { Selector } from 'testcafe';

export default class footerLinks {
  constructor() {
    this.company = Selector('a').withText('Mitoc Group');
    this.termsOfUse = Selector('a').withText('Terms of Use');
    this.privacyPolicy = Selector('a').withText('Privacy Policy');
  }
};





