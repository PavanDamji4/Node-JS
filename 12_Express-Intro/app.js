const http = require('http');
const express = require('express')

const app = express()

app.use('/home',(req, res, next) => {
  console.log("Home!")

  res.send('<h1> Home Page </h1>')
   
});

app.use('/submit',(req, res, next) => {
  console.log("Submit!")

  res.send(' <h1> Submit Page </h1>')
})

app.use('/aboutus',(req, res, next) => {
  console.log("About Us!")

  res.send(' <h1> About Us Page </h1>')
  next();
})


app.listen(3000, () => {
  console.log("The server running at http://localhost:3000")
})