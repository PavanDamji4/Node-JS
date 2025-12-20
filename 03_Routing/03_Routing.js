const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/'){

      res.write(`
    <html>
      <head>
        <title>Yoooo</title>
      </head>
      <body>
        <h1> This is the Default Page </h1>
        <p>Hello Worlddddddddd</p>

      </body>
    </html>
    
      `);
      return res.end();
      }
      

  else if (req.url === '/about'){
    res.write(`
      <html>
        <head>
          <title>Yoooo</title>
        </head>
        <body>
          <h1> This is the about page </h1>
          <p>Hello Worlddddddddd</p>

        </body>
      </html>
    `)
    return res.end();

  }

  else if (req.url === '/howitworks')
    res.write(`
      <html>
        <head>
          <title>Yoooo</title>
        </head>
        <body>
          <h1> This is the how it works page </h1>
          <p>Hello Worlddddddddd</p>

        </body>
      </html>
      
    `)
    return res.end();
}

)

server.listen(3000, () => {
  console.log("The running server is http://localhost:3000");
});
