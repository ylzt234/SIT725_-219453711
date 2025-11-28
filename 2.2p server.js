// server.js
const express = require('express');
const app = express();
const port = 3000; // Server port (can be modified, e.g., 8080)

// 1. Configure the public folder to serve static files (key step for Part 1)
app.use(express.static('public'));

// 2. Experiment with a simple GET endpoint (e.g., return a welcome message)
app.get('/api/welcome', (req, res) => {
  res.send({ message: 'Welcome to the simple API endpoint!', http_method: 'GET' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
