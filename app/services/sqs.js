const AwsService = require('./aws');

class SQSService {
  constructor(url) {
    this.service = new AwsService.SQS();
    this.url = url;
  }

  postMessage(params) {
    const data = {
      MessageBody: JSON.stringify(params),
      QueueUrl: this.url,
    };

    return this.service.sendMessage(data).promise();
  }
}

module.exports = new SQSService(process.env.SQS_URL);
