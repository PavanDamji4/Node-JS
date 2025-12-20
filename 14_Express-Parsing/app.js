const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.get('/',(req, res, next) => {
  console.log(req.url, req.method)
  console.log("Home!")

  res.send(`<h1> Welcome to default page</h1> 
    <a href = "/home"> Go to home </a>`)
   
});

app.get('/home',(req, res, next) => {
  console.log("Home!")

  res.send('<h1> Home Page </h1> <br> <a href = "/form" >Click here to fill form </a>')
   
});

app.get('/form',(req, res, next) => {
  console.log("Form Page!")

  res.send(`<!DOCTYPE html>
            <html>
            <head>
              <title>Simple Form</title>
            </head>
            <body>

              <h2>User Form</h2>

              <form action="/submit" method="POST">

                <label>Name:</label>
                <input type="text" name="name" required>
                <br><br>

                <label>Email:</label>
                <input type="email" name="email" required>
                <br><br>

                <button type="submit">Submit</button>

              </form>

            </body>
            </html>
  `)
})

app.use(bodyparser.urlencoded());

app.post('/submit',(req, res, next) => {
  console.log("Submit!")
  console.log(req.body)
  res.send(' <h1> Submited successfully </h1>')
})




app.listen(3000, () => {
  console.log("The server running at http://localhost:3000")
})