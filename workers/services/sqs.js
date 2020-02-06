const AwsService = require('./aws');

class SQSService {
  constructor(url) {
    this.service = new AwsService.SQS();
    this.url = url;
  }
}

module.exports = new SQSService(process.env.SQS_URL);
