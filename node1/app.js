const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const delay = 5000; // Delay in milliseconds (e.g., 2000 ms = 2 seconds)
  setTimeout(() => {
    console.log("service 2")
    res.send('Hello from Node.js  2 Service!');
  }, delay);
});

app.get('/info', (req, res) => {
  res.json({ service: 'Node.js  1 Service Changes Deployed', status: 'Running' });   
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);  
});
