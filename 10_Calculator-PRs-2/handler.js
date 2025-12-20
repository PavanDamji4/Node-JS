  const sumhandler = require('./sum')
  
  const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/'){
    res.write(`
        <h1> Welcome to the Calculator App</h1>
        <a href="/calculator">Go to Calculator</a>
      `);
      return res.end();
  }

  else if (req.url === '/calculator'){
    res.write(`

        <!DOCTYPE html>
        <html>
        <head>
          <title>Two Number Input</title>
        </head>
        <body>

          <h2>Enter Two Numbers</h2>

          <form  action="/calculate-result" method="POST">
            
            <label>Number 1:</label>
            <input type="number" name="num1" required>
            <br><br>

            <label>Number 2:</label>
            <input type="number" name="num2" required>
            <br><br>

            <button type="submit">Sum</button>

          </form>

        </body>
        </html>

      `);
      return res.end();
    }
 
    else if (req.url === '/calculate-result' && req.method === 'POST'){

      return sumhandler ( req, res);
     
      
    }
};


module.exports = requestHandler;