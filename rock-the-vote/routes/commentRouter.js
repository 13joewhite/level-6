const express = require("express")
const commentRouter = express.Router()
const Post = require('../models/post')

//get comments by post ID

commentRouter.get('/:postId', (req, res, next) => {
    console.log(req.params.postId)
    Post.find({ post: req.params.postId }, (err, post) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(post)
    })
}) 

commentRouter.post('/', (req, res, next) => {
    const { post, comment } = req.body
    console.log(post, comment, req.user._id)
        Post.findOneAndUpdate({ _id: post }, { $push : {comment: {post: post, user: req.user._id, comment: comment}}},
        { new: true },
        (err, newComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newComment)
        }
    )
})

commentRouter.put('/:postId', (req, res, next) => {
        Post.findOneAndUpdate({ _id: req.params.postId, "comment.user": req.user._id }, { $set : {"comment.$.comment": req.body.comment} },
        { new: true },
        (err, updatedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedComment)
        }
    )
})

module.exports = commentRouter