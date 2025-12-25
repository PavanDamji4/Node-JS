const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})

adminobj = {
  Name : 'pavan'
}
app.get('/adminhome', (req, res) => {
  res.render('adminhome')
  console.log(adminobj.Name)
})

userobj = {
  Name : 'Pavan Damji',
  email : 'pavandamji@gmail.com',
  status : 'active'
}
app.get('/userhome', (req, res) => {
  res.render('userhome')
})

app.listen(3000, () => {
  console.log("The server running at http://localhost:3000")
})