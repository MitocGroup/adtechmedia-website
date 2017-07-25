import { Selector } from 'testcafe';

export default class apiPage {
  constructor() {
    this.apiPageCaseStudies = Selector('.flex-item-4:nth-child(1)');
    this.pageElementApiDocs = Selector('.flex-item-4:nth-child(2)');
    this.pageElementUserGuide = Selector('.flex-item-4:nth-child(3)');
  }
};

