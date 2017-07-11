const chai = require('chai');
const Handler = require('../Handler.js');

describe('Test Handler', () => {
  it('Test main', () => {
    chai.expect(Handler).to.be.an('function');
  });
});
