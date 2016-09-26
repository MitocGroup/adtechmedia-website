'use strict';

import DeepFramework from 'deep-framework';
import AWS from 'aws-sdk';

export default class extends DeepFramework.Core.AWS.Lambda.Runtime {
  /**
   * @param {Array} args
   */
  constructor(...args) {
    super(...args);
  }

  /**
   * @param {Object} data
   */
  handle(data) {
    this._sendMail(data, () => {
      this.createResponse({}).send();
    });
  }

  /**
   * Send email
   * @param {Object} data
   * @param {Function} callback
   * @private
   */
  _sendMail(data, callback) {
    let ses = new AWS.SES();

    let message = `
      name: ${data.name}
      phone: ${data.phone}
      email: ${data.email}
      message: ${data.message}
    `;
    let parameters = this.kernel.config.microservices['deep-adtechmedia'].parameters.email;

    let params = {
      Destination: {
        ToAddresses: parameters.destinationEmails.split(','),
      },
      Message: {
        Body: {
          Text: {
            Data: message
          },
        },
        Subject: {
          Data: 'Contact us'
        }
      },
      Source: parameters.sourceEmail,
    };

    ses.sendEmail(params, (error) => {
      if (error) {
        throw new DeepFramework.Core.Exception.Exception(error);
      }

      callback();
    });
  }

  /**
   * @returns {Function}
   */
  get validationSchema() {
    /**
     * @param {Object} Joi
     * @link: https://github.com/hapijs/joi/tree/v5.1.0
     */
    return (Joi) => {
      return Joi.object().keys({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        message: Joi.string().max(255).required()
      });
    }
  }
}
