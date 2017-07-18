import { Selector } from 'testcafe';

export default class homePage {
  constructor() {
    this.homeRequestDemoModal = Selector('.modal__trigger');
    this.homeRequestDemoModalClose = Selector('.close-btn');
    this.homeWatchNowModal = Selector('.video-show');
    this.homeWatchNowModalClose = Selector('.video-close');
  }
};

