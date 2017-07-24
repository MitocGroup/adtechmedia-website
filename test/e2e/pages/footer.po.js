import { Selector } from 'testcafe';

export default class footer {
  constructor() {
    this.footerRequestDemoModal = Selector('.demo-footer > button');
    this.footerRequestDemoModalClose = Selector('.close-btn');
    this.company = Selector('a').withText('Mitoc Group');
    this.termsOfUse = Selector('a').withText('Terms of Use');
    this.privacyPolicy = Selector('a').withText('Privacy Policy');
  }
};





