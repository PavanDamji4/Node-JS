const sumhandler = (req, res) => {
const body = [];
      req.on('data',chunk => {
        console.log(chunk);
        body.push(chunk);
      })
      req.on('end', () => {
        const fullbody = Buffer.concat(body).toString();
        console.log(fullbody);
        const params = new URLSearchParams(fullbody);
        const bodyObj = Object.fromEntries(params)
        const result = Number(bodyObj.num1) + Number(bodyObj.num2)

         res.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Result</title>
        </head>
        <body>

          <h1>Result</h1>
          <h2>Sum = ${result}</h2>

        </body>
        </html>

      `);
      return res.end();
      })
    }

    module.exports = sumhandler