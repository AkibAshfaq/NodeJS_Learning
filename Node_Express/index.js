const http = require('http')
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.get('/about', (req, res) => {
  return res.send('About Page');
});

const server = http.createServer(app);
server.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});

