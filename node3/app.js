const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Hello from Node.js 3 Service!');
});

app.get('/info', (req, res) => {
  res.json({ service: 'Node.js 3 Service', status: 'Running' });
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
