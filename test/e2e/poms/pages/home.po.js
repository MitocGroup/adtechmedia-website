import { Selector } from 'testcafe';

export default class Home {
  constructor() {
    this.requestDemoModal = Selector('.info-block > .modal__trigger');
    this.requestDemoModalClose = Selector('.close-btn');
    this.watchNowModal = Selector('.video-show');
    this.watchNowModalClose = Selector('.video-close');
    this.laptopPlay = Selector('.play');
  }
};

