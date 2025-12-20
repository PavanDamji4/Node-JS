const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')

const adminRouter = require('./Routes/admin.js')
const userRouter = require('./Routes/user.js')


app.get('/',(req, res, next) => {
  console.log( req.url, req.method )
  res.sendFile(
    path.join(__dirname , 'views', 'home.html'));
})

app.use(bodyparser.urlencoded())

app.use(adminRouter)

app.use(userRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(
    path.join(__dirname, 'views', '404err.html')
  )
})

app.listen(3000,() => {
  console.log("Server running at http://localhost:3000")
})

