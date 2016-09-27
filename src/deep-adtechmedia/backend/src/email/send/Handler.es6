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
    this._sendMail(this._buildMessage(data), this._buildSubject(data), () => {
      this.createResponse({}).send();
    });
  }

  /**
   * @param {Object} data
   * @returns {String}
   * @private
   */
  _buildSubject(data) {
    return data.name ? 'Contact us' : 'Get started';
  }

  /**
   * Build email message
   * @param {Object} data
   * @returns {String}
   * @private
   */
  _buildMessage(data) {
    if (data.name) {
      return `
      name: ${data.name}
      phone: ${data.phone}
      email: ${data.email}
      message: ${data.message} `
    }

    return `email: ${data.email}`
  }

  /**
   * Send email
   * @param {String} message
   * @param {String} subject
   * @param {Function} callback
   * @private
   */
  _sendMail(message, subject, callback) {
    let ses = new AWS.SES();
    let parameters = this.kernel.config.microservices['deep-adtechmedia'].parameters.email;

    let params = {
      Destination: {
        ToAddresses: parameters.destinationEmails.split(',').map(el => el.trim()),
      },
      Message: {
        Body: {
          Text: {
            Data: message
          },
        },
        Subject: {
          Data: subject
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
      return Joi.alternatives().try(
        Joi.object().keys({
          name: Joi.string().max(255).required(),
          phone: Joi.string().max(255).required(),
          email: Joi.string().email().required(),
          message: Joi.string().max(255).required()
        }),
        Joi.object().keys({
          email: Joi.string().email().required()
        })
      );
    }
  }
}
