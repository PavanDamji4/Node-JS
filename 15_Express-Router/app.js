const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const adminrouter = require('./routers/admin.js')
const userrouter = require('./routers/user.js')

app.get('/',(req, res, next) => {
  console.log( req.url, req.method )
  res.send(`
    <h1> Welcome to IZON Platform </h2>
    <a href = "/admin/home"> Admin Home </a>
    <br>
    <a href = "/user/home"> User Home </a>


    `)
})


app.use(bodyparser.urlencoded())
app.use(adminrouter)
app.use(userrouter)


app.use((req, res, next) => {
  res.status(404).send("There is 404 error on the IZON page!")
})

app.listen(3000,() => {
  console.log("Server running at http://localhost:3000")
})

