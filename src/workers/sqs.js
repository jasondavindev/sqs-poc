const { Consumer } = require('sqs-consumer');
const SQSService = require('../services/sqs');

const worker = Consumer.create({
  queueUrl: SQSService.url,
  sqs: SQSService.service,
  handleMessage: async (message) => {
    console.log(message);
  },
  waitTimeSeconds: 4,
});

worker.on('error', (err) => {
  console.error(err.message);
});

worker.on('processing_error', (err) => {
  console.error(err.message);
});

module.exports = worker;
