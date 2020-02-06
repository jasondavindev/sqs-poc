const worker = require('./workers/sqs');

console.log('starting workers');
worker.start();
