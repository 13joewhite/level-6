const express = require("express")
const likeDislikeRouter = express.Router()
const Post = require('../models/post')

//get likesDislikes by post ID

likeDislikeRouter.get('/:postId', (req, res, next) => {
    console.log(req.params.postId)
    Post.find({ post: req.params.postId }, (err, post) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(post)
    })
  })

  likeDislikeRouter.post('/', (req, res, next) => {
    const { post, likeDislike } = req.body
    console.log(post, likeDislike, req.user._id)
      Post.findOneAndUpdate({ _id: post }, { $push : {likeDislike: {post: post, user: req.user._id, likeDislike: likeDislike}}},
      { new: true },
      (err, updatedLike) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedLike)
      }
    )
  })


    likeDislikeRouter.put('/:postId', (req, res, next) => {
      Post.findOneAndUpdate({ _id: req.params.postId, "likeDislike.user": req.user._id }, { $set : {"likeDislike.$.likeDislike": req.body.likeDislike} },
      { new: true },
      (err, updatedLike) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedLike)
      }
    )
    })

module.exports = likeDislikeRouter