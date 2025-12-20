const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/'){
    res.write(
        `<html>
        <head>
          <title>Home</title>
        </head>
        <body>
          <h1>This is the Home Page</h1>

          <h3>Go to pages:</h3>

          <ul>
            <li><a href="/mens">Mens Section</a></li>
            <li><a href="/womens">Womens Section</a></li>
            <li><a href="/kids">Kids Section</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>

        </body>
      </html>`

   )
        return res.end();
    }
    else if(req.url === '/mens'){
      res.write(`
      <html>
        <head>
          <title>Men Page</title>
        </head>
        <body>
          <h1> This is the Men page </h1>
          </body>
          </html>`)
          return res.end();

    }
        else if(req.url === '/womens'){
      res.write(`
      <html>
        <head>
          <title>Women Page</title>
        </head>
        <body>
          <h1> This is the Women page </h1>
          </body>
          </html>`)
          return res.end();

    }
        else if(req.url === '/kids'){
      res.write(`
      <html>
        <head>
          <title>kids Page</title>
        </head>
        <body>
          <h1> This is the kids page </h1>
          </body>
          </html>`)
          return res.end();

    }
        else if(req.url === '/cart'){
      res.write(`
      <html>
        <head>
          <title>cart Page</title>
        </head>
        <body>
          <h1> This is the cart page </h1>
          </body>
          </html>`)
          return res.end();

    }
})

server.listen(3000, () => {
  console.log("The running server is http://localhost:3000");
});