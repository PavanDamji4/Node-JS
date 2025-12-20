const http = require('http');
const userhandler = require('./Export-module');

const server = http.createServer(userhandler);

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});