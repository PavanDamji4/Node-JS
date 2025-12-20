const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/'){
    res.write(`<!DOCTYPE html>
          <html>
          <head>
            <title>Basic Form</title>
          </head>
          <body>

            <h2>Simple Form</h2>

            <form action="/submit" method="POST">
              
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required>
              <br><br>

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
              <br><br>

              <label for="age">Age:</label>
              <input type="number" id="age" name="age">
              <br><br>

              <button type="submit">Submit</button>

            </form>

          </body>
          </html>

`)
 return res.end();
  }

  else if (req.url === '/submit' && req.method === 'POST'){
    res.write(`<!DOCTYPE html>
        <head>
          <title>Form Submitted</title>
          </head>
          <body>
            <h1>Form Submitted Successfully!</h1>
          </body>
        </html>
          `)
    const body = [];
    req.on('data',chunk => {
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end', () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
    }

    )
    return res.end();
  }
  
});



server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});