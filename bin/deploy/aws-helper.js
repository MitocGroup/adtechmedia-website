'use strict';

const AWS = require('aws-sdk');

class AwsHelper {

  /**
   * ATM hosted zone ID
   * @returns {string}
   * @private
   */
  static hostedZoneId() {
    return 'Z17L96DE7IF0IN';
  }

  /**
   * ATM deploy assets bucket name
   * @returns {string}
   */
  static assetsBucket() {
    return 'atm-deploy-assets';
  }

  /**
   * Constructor
   */
  constructor() {
    AWS.config.credentials = process.env.CI
      ? new AWS.EnvironmentCredentials('AWS')
      : new AWS.SharedIniFileCredentials({ profile: 'mitoc' });

    this.s3 = new AWS.S3();
    this.route53 = new AWS.Route53();
    this.cloudfront = new AWS.CloudFront();
  }

  getS3Object(objectKey) {
    return new Promise((resolve, reject) => {
      this.s3.getObject({
        Bucket: AwsHelper.assetsBucket(),
        Key: objectKey
      }, (err, data) => {
        if (err) {
          return reject(err.stack);
        }

        resolve(data);
      });
    })
  }

  /**
   * Get distribution info by its ID
   * @param id
   * @returns {Promise}
   */
  getDistributionById(id) {
    return new Promise((resolve, reject) => {
      this.cloudfront.getDistribution({ Id: id }, (err, data) => {
        if (err) {
          return reject(err.stack);
        }

        resolve(data);
      });
    });
  }

  /**
   * Update distribution config
   * @param distId
   * @param distConfig
   * @param etag
   * @returns {Promise}
   */
  updateDistributionConfig(distId, distConfig, etag = null) {
    return new Promise((resolve, reject) => {
      let params = {
        Id: distId,
        DistributionConfig: distConfig
      };

      if (etag) {
        params['IfMatch'] = etag;
      }

      this.cloudfront.updateDistribution(params, (err, data) => {
        if (err) {
          return reject(err.stack);
        }

        return this.waitForDistributionIsDeployed(distId);
      });
    });
  }

  /**
   * Get list of active distributions (not marked as REMOVE)
   * @returns {Promise}
   */
  getListOfActiveDistributions() {
    return new Promise((resolve, reject) => {
      this.cloudfront.listDistributions({}, (err, data) => {
        if (err) {
          return reject(err.stack);
        }

        let result = [];
        let regexp = new RegExp('REMOVE', 'gi');

        data.Items.forEach(item => {
          if (!regexp.test(item.Comment)) {
            result.push(item);
          }
        });

        resolve(result);
      });
    })
  }

  /**
   * Wait for distribution is deployed
   * @param distId
   * @returns {Promise}
   */
  waitForDistributionIsDeployed(distId) {
    return new Promise((resolve, reject) => {
      this.cloudfront.waitFor('distributionDeployed', {Id: distId}, (err, res) => {
        if (err) {
          return reject(err.stack);
        }

        resolve(res);
      });
    });
  }

  /**
   * Get resource record by domain name
   * @param resourceName
   * @returns {Promise}
   */
  getResourceRecordByName(resourceName) {
    return new Promise((resolve, reject) => {
      this.route53.listResourceRecordSets({
        HostedZoneId: AwsHelper.hostedZoneId(),
        StartRecordName: resourceName
      }, (err, res) => {
        if (err) {
          return reject(err.stack);
        }

        if (!res.ResourceRecordSets[0]) {
          return reject('Resource record not found');
        }

        resolve(res.ResourceRecordSets[0]);
      });
    });
  }

  /**
   * Update resource record and wait till records changed
   * @param recordSet
   * @returns {Promise}
   */
  updateResourceRecord(recordSet) {
    return new Promise((resolve, reject) => {
      this.route53.changeResourceRecordSets({
        ChangeBatch: {
          Changes: [{
            Action: 'UPSERT',
            ResourceRecordSet: recordSet
          }],
        },
        HostedZoneId: AwsHelper.hostedZoneId()
      }, (err, res) => {
        if (err) {
          return reject(err.stack);
        }

        this.route53.waitFor('resourceRecordSetsChanged', {Id: res.ChangeInfo.Id}, (err, res) => {
          if (err) {
            return reject(err.stack);
          }

          resolve(res);
        })
      });
    });
  }

}

module.exports = AwsHelper;
