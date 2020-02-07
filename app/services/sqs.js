const AWS = require('aws-sdk');

class SQSService {
  constructor(options = {}) {
    this.service = new AWS.SQS(options);
    this.url = options.url;
  }

  postMessage(params) {
    const data = {
      MessageBody: JSON.stringify(params),
      QueueUrl: this.url,
    };

    return this.service.sendMessage(data).promise();
  }
}

module.exports = new SQSService({
  endpoint: process.env.AWS_SQS_ENDPOINT,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  url: process.env.AWS_SQS_URL,
});
