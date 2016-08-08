// import http = require('http');
// const port = 3000;
//
// let server = http.createServer((request, response) => {
//   response.end(`${request.url}`);
// })
//
// server.listen(port, function() {
//   console.log(`Server connected to port ${port}`);
// })

import express = require('express');
const app = express();
const port = 8080;

app.get('/', function(req, res) {
  res.send('Hello World!')
})

let server = app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
})
