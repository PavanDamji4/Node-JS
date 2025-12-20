const express = require('express')
const userRouter = express.Router()

userRouter.get('/user/home',(req, res, next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'userhome.html')
  )

})


userRouter.get('/user/login',(req,res,next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'userform.html')
  )
})

userRouter.post('/user/submit',(req, res, next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'usersubmit.html')
  )
  console.log(req.body)

})