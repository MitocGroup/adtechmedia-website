'use strict';

import DeepFramework from 'deep-framework';
import AWS from 'aws-sdk';
import request from 'request';
import querystring from 'querystring';

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
    this._checkCaptcha(data, () => {
      this._sendMail(this._buildMessage(data), this._buildSubject(data), () => {
        this.createResponse({}).send();
      });
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
   * Check Captcha
   * @param {Object} data
   * @param {Function} callback
   */
  _checkCaptcha(data, callback) {
    if (!data.name) {
      return callback();
    }

    request(this.buildGoogleLink(data.captchaResponse), (error, response, body) => {
      if (error) {
        throw new DeepFramework.Core.Exception.Exception(error);
      }

      if (response.statusCode < 200 && response.statusCode >= 300) {
        throw new DeepFramework.Core.Exception.Exception('Unexpected error during Captcha check', response.statusCode);
      }

      let responseBody;

      try {
        responseBody = JSON.parse(response.body);
      } catch(e) {
        throw new DeepFramework.Core.Exception.Exception('Failed to parse google JSON response');
      }

      if (!responseBody.success) {
        throw new DeepFramework.Core.Exception.Exception('The security code you entered is incorrect or expired.');
      }

      return callback();
    });
  }

  /**
   * Build google endpoint link for captcha checking
   * @param {String} captchaResponse
   * @returns {String}
   */
  buildGoogleLink(captchaResponse) {
    let reCaptchaSecret = this.kernel.config.microservices['deep-adtechmedia'].parameters.reCaptchaSecret;
    let parameters = querystring.stringify({
      secret : reCaptchaSecret,
      response : captchaResponse,
    });

    return `https://www.google.com/recaptcha/api/siteverify?${parameters}`;
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
          message: Joi.string().max(255).required(),
          captchaResponse: Joi.string().required(),
        }),
        Joi.object().keys({
          email: Joi.string().email().required()
        })
      );
    }
  }
}
