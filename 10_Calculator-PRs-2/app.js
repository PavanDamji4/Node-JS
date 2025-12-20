const http = require('http');
const handler = require('./handler.js')

const server = http.createServer(handler)

server.listen(3000, () => {
  console.log("The Server is running at http://localhost:3000")
})