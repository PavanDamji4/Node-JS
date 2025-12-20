
const http = require('http');

const Server = http.createServer((req , res) => {
  res.end("The Server Started successfully!, hureeeeee")
  console.log(req.url, req.headers, req.method)

})

Server.listen(3002, () => {
  console.log("Server started at http://localhost:3002")
}
)