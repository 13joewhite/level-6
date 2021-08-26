const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LikeDislike = require('./likedislike')

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    required: true
  },
  user: { 
    type: Schema.Types.ObjectId,
    ref: "User", 
    required: true
  },
  likeDislike: {
    type: Schema.Types.Array,
    ref: "LikeDislike",
    required: false
  }
  // comments: {
  // similar to the likeDislike
  //}
})

module.exports = mongoose.model("Post", postSchema)