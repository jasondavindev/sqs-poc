const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials();
AWS.config.update({ credentials, region: process.env.AWS_REGION });

module.exports = AWS;
