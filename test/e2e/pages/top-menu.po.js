import { Selector } from 'testcafe';

export default class topMenu {
  constructor() {
    this.challengesTopMenuLink = Selector('.clearfix > li:nth-child(1) > a');
    this.solutionsTopMenuLink = Selector('.clearfix > li:nth-child(2) > a');
    this.apiTopMenuLink = Selector('.clearfix > li:nth-child(3) > a');
    this.teamTopMenuLink = Selector('.clearfix > li:nth-child(4) > a');
    this.contactTopMenuLink = Selector('.clearfix > li:nth-child(5) > a');
    this.blogTopMenuLink = Selector('.clearfix > li:nth-child(6) > a');
    this.requestDemoTopMenuItem = Selector('.custom-menu-link > a');
  }
};