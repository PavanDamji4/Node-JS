const express = require('express')
const adminRouter = express.Router();

adminRouter.get('/admin/home',(req, res, next) => {
  res.sendFile(
    path.join(__dirname, 'views', 'adminhome.html')
  )

  })

adminRouter.get('/admin/login',(req,res,next) => {
   res.sendFile(
    path.join(__dirname, 'views', 'adminform.html')
  )
})

adminRouter.post('/admin/submit',(req, res, next) => {
 res.sendFile(
    path.join(__dirname, 'views', 'adminsubmit.html')
  )
    console.log(req.body)
})
