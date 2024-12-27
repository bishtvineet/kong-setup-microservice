const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Node.js 2 Service!');
});

app.get('/info', (req, res) => {
  res.json({ service: 'Node.js 2 Service', status: 'Running' });
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
