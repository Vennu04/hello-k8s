const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v1.0.0';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Kubernetes!',
    version: VERSION,
    pod: process.env.HOSTNAME,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
