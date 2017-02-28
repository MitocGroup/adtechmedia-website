'use strict';

import chai from 'chai';
import bootstrap from '../../../../../backend/src/email/send/bootstrap';

suite('Bootstraps', () => {
  test(' bootstrap exists in email-update module', () => {
    chai.expect(bootstrap).to.be.an('object');
  });
});
