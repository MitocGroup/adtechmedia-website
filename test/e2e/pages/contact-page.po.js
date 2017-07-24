import { Selector } from 'testcafe';

export default class contact {
  constructor() {
    this.formModal = Selector('.contact-form');
    this.nameField = Selector('#name-field');
    this.phoneField = Selector('#phone-field');
    this.emailField = Selector('#email-field');
    this.messageField = Selector('#message-field');
    this.submitButton = Selector('#contact-button');
    this.contactGoogleMap = Selector('#googleMap');
  }
};

