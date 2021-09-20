const express = require("express")
const postRouter = express.Router()
const Post = require('../models/post.js')

// Get All post
postRouter.get("/", (req, res, next) => {
  Post.find((err, post) => {
    if(err){
      res.status(500)
      return next(err)
  }
    return res.status(200).send(post)
  })
})

// Get post by user id (just the users info)
postRouter.get('/user', (req, res, next) => {
  Post.find({ user: req.user._id }, (err, post) => {
    if(err){
      res.status(500) 
      return next(err)
    }
    return res.status(200).send(post)
  })
})

// Add new Post
postRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newPost = new Post(req.body)
  newPost.save((err, savedPost) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedPost)
  })
})

// Delete Post
postRouter.delete("/:postId", (req, res, next) => {
  Post.findOneAndDelete(
    { _id: req.params.postId, user: req.user._id },
    (err, deletedPost) => { 
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete post: ${deletedPost.title}`)
    }
  )
})

// Update  Post
postRouter.put("/:postId", (req, res, next) => {
  Post.findOneAndUpdate(
    { _id: req.params.postId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPost)
    }
  )
})

module.exports = postRouter