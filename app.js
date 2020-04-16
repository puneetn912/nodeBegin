const http = require('http');

const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at port 3003`);
});

let app = require('express')

let router = app.Router()
