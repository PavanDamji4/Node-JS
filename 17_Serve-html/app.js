const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')

app.get('/',(req, res, next) => {
  console.log( req.url, req.method )
  res.sendFile(
    path.join(__dirname , 'views', 'home.html'));
})


app.use(bodyparser.urlencoded())

app.get('/admin/home',(req, res, next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'adminhome.html')
  )

  })

app.get('/admin/login',(req,res,next) => {
   res.sendFile(
    path.join(__dirname, 'views', 'adminform.html')
  )
})

app.post('/admin/submit',(req, res, next) => {
 res.sendFile(
    path.join(__dirname, 'views', 'adminsubmit.html')
  )
    console.log(req.body)
})

app.get('/user/home',(req, res, next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'userhome.html')
  )

})


app.get('/user/login',(req,res,next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'userform.html')
  )
})

app.post('/user/submit',(req, res, next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'usersubmit.html')
  )
  console.log(req.body)

})


app.use((req, res, next) => {
  res.status(404).sendFile(
    path.join(__dirname, 'views', '404err.html')
  )
})

app.listen(3000,() => {
  console.log("Server running at http://localhost:3000")
})

