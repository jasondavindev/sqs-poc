const express = require('express');
const SQSService = require('./services/sqs');

const app = express();
app.use(express.json());

app.post('/message', async (req, res) => {
  const {
    body: { message },
  } = req;

  if (message) {
    try {
      const data = await SQSService.postMessage({ message });
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  res.status(400).end();
});

app.listen(3000, () => {
  console.log('server listening');
});
