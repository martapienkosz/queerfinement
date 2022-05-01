let express = require('express');
let http = require('http');
const { emit } = require('process');
let io = require("socket.io");

let app = express();
let server = http.createServer(app); // wrap the express app with http
io = new io.Server(server); // use socket.io on the http app

app.use('/', express.static('public'));

// server listening on port
server.listen(8800, () => {
  console.log("server is up and running")
})