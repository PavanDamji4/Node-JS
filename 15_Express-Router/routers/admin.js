const express = require('express')
const adminrouter = express.Router()


adminrouter.get('/admin/home',(req, res, next) => {
  res.send(`
    <h1> This is the admin home </h1>
    <a href = "/admin/login"> Login </a>
    `)

  })

adminrouter.get('/admin/login',(req,res,next) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Login Page</title>
    </head>
    <body>

    <h2>Login</h2>

    <form action="/admin/submit" method="POST">

    <label>Username:</label><br>
    <input type="text" name="username" required>
    <br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required>
    <br><br>

    <label>Password:</label><br>
    <input type="password" name="password" required>
    <br><br>

    <button type="submit">Login</button>

      </form>

    </body>
    </html>

    `)
})

adminrouter.post('/admin/submit',(req, res, next) => {
  res.send(`
    <h1> Logged in successfully [ admin ]</h1>
    
    `)
    console.log(req.body)
})


module.exports = adminrouter