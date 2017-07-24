import { Selector } from 'testcafe';

export default class homePage {
  constructor() {
    this.homeRequestDemoModal = Selector('.info-block > .modal__trigger');
    this.homeRequestDemoModalClose = Selector('.close-btn');
    this.homeWatchNowModal = Selector('.video-show');
    this.homeWatchNowModalClose = Selector('.video-close');
    this.homeLaptopPlay = Selector('.play');
  }
};

