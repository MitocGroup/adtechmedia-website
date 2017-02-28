// THIS TEST WAS GENERATED AUTOMATICALLY ON Thu Oct 06 2016 16:29:58 GMT+0300 (EEST)

'use strict';

import chai from 'chai';
import Joi from 'joi';
import Handler from '../../../../../backend/src/email/send/Handler';
import Kernel from '../../../node_modules/deep-framework/node_modules/deep-kernel';
import KernelFactory from '../../common/KernelFactory';

// @todo: Add more advanced tests
suite('Handlers', () => {
  let handler, kernelInstance;

  test('Class Handler exists in email-update module', () => {
    chai.expect(Handler).to.be.an('function');
  });

  test('Load Kernel by using Kernel.load()', (done) => {
    let callback = (backendKernel) => {
      kernelInstance = backendKernel;

      chai.assert.instanceOf(
        backendKernel, Kernel, 'backendKernel is an instance of Kernel'
      );

      // complete the async
      done();
    };

    KernelFactory.create(callback);
  });

  test('Check Handler constructor', () => {
    handler = new Handler(kernelInstance);

    chai.expect(handler).to.be.an.instanceof(Handler);
  });

  test('Check handle method exists', () => {
    chai.expect(handler.handle).to.be.a('function');
  });

  test('Check validation schema to be a function', () => {
    chai.expect(handler.validationSchema).to.be.a('function');
  });

  test('Check validation\'s schema function to return an object', () => {
    chai.expect(handler.validationSchema(Joi)).to.be.an('object');
  });

  test('Check _dataToMail function to return an object', () => {
    let data = {
      name: 'TestName',
      email: 'hello@test.com',
    };

    chai.expect(handler._dataToMail(data)).to.be.an('object');
  });
});
