const express = require("express")
const userRouter = express.Router()
const User = require('../models/user')

userRouter.get('/:userId', (req, res, next) => {
    console.log(req.params)
    User.findOne({ _id: req.params.userId}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        if(user) {
            return res.status(200).send(user.username)
        } 
    })
})

module.exports = userRouter