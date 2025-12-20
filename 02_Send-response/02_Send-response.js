const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Yoooo</title>
      </head>
      <body>
        <h1> This is the send- response page </h1>
        <p>Hello Worlddddddddd</p>

      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("The running server is http://localhost:3000");
});
