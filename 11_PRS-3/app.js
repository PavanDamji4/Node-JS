const http = require('http')

const server = http.createServer((req, res) => {
   console.log(req.url, req.method);
   res.setHeader('Content-Type', 'text/html')

   if( req.url === '/'){
    res.write(`
      <h1> Welcome to the Home Page </h1>
      <a href = "/form" > Go to the form page </a>
      `)
    return res.end();
   }
   else if(req.url === '/form'){
    
    res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>User Details Form</title>
      </head>
      <body>

        <h2>User Details</h2>

        <form action="/submit" method="POST">

          <label>Name:</label>
          <input type="text" name="name" required>
          <br><br>

          <label>Age:</label>
          <input type="number" name="age" required>
          <br><br>

          <label>Gender:</label>
          <br>
          <input type="radio" name="gender" value="Male" required> Male
          <br>
          <input type="radio" name="gender" value="Female"> Female
          <br>
          <input type="radio" name="gender" value="Other"> Other
          <br><br>

          <label>Email:</label>
          <input type="email" name="email" required>
          <br><br>

          <button type="submit">Submit</button>

        </form>

      </body>
      </html>

      `)
      return res.end();

   }
  
  else if(req.url === '/submit' && req.method === 'POST')
  {
      const body = []
      req.on('data',chunk  => {
        console.log(chunk);
        body.push(chunk)
      })

      req.on('end', () => {
        const fullbody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullbody);
        const bodyOBJ = Object.fromEntries(params);

        const name = bodyOBJ.name;
        const age = bodyOBJ.age;
        const gender = bodyOBJ.gender;
        const email = bodyOBJ.email;


        res.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>User Details</title>
          </head>
          <body>

            <h1>Welcome ${name}</h1>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Email:</strong> ${email}</p>

          </body>
          </html>

          `)
          return res.end();
      })
      
  }
  

})

server.listen(3000, () => {
  console.log("The Server running at http://localhost:3000")
});