const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js  1 Service!');
});

app.get('/info', (req, res) => {
  res.json({ service: 'Node.js  1 Service Changes Deployed ', status: 'Running' });
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
