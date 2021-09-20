const express = require('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))
 
mongoose.connect(
    'mongodb://localhost:27017/rock-the-vote',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        useFindAndModify: false
      },
      () => console.log('Connected to the DB')
    )
    
    app.use('/auth', require('./routes/authRouter'))
    app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ['sha1', 'RS256', 'HS256']}))
    app.use('/api/post', require('./routes/postRouter.js'))
    app.use('/api/user', require('./routes/userRouter.js'))
    app.use('/api/likeDislike', require('./routes/likeDislikeRouter.js'))
    app.use('/api/comment', require('./routes/commentRouter.js'))
    
    app.use((err, req, res, next) => {
      console.log(err)
        if(err.name === "UnauthorizedError") {
          res.status(err.status)
        }
      return res.send({errMsg: err.message})
    })

app.listen(8000, () => {
    console.log("Server running on Port 8000")
})