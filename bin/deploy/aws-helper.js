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
   * Wait timeout
   * @returns {number}
   */
  static waitTimeout() {
    return 480000; // 8 min
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

  /**
   * @param objectKey
   * @returns {Promise}
   */
  getS3Object(objectKey) {
    return this.s3.getObject({ Bucket: AwsHelper.assetsBucket(), Key: objectKey }).promise();
  }

  /**
   * @param objectKey
   * @returns {Promise}
   */
  putS3Object(objectKey) {
    return this.s3.putObject({ Bucket: AwsHelper.assetsBucket(), Key: objectKey }).promise();
  }

  /**
   * @param objectKey
   * @returns {Promise}
   */
  deleteS3Object(objectKey) {
    return this.s3.deleteObject({ Bucket: AwsHelper.assetsBucket(), Key: objectKey }).promise();
  }

  /**
   * Get distribution info by its ID
   * @param id
   * @returns {Promise}
   */
  getDistributionById(id) {
    return this.cloudfront.getDistribution({ Id: id }).promise();
  }

  /**
   * Update distribution config
   * @param distId
   * @param distConfig
   * @param etag
   * @returns {Promise}
   */
  updateDistributionConfig(distId, distConfig, etag = null) {
    let params = {
      Id: distId,
      DistributionConfig: distConfig
    };

    if (etag) {
      params['IfMatch'] = etag;
    }

    return this.cloudfront.updateDistribution(params).promise().then(() => {
      return this.waitForDistributionIsDeployed(distId);
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
        data.Items.forEach(item => {
          if (!item.Comment.startsWith('REMOVE')) {
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
    let waitFor = this.cloudfront.waitFor('distributionDeployed', {Id: distId}).promise();
    let forceResolver = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Stop waiting deployed status for: ${distId}`);
        resolve();
      }, AwsHelper.waitTimeout());
    });

    return Promise.race([forceResolver, waitFor]);
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
