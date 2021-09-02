const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  },
  comment: {
    type: Schema.Types.Array,
    ref: "Comment",
    required: false
  }
})

module.exports = mongoose.model("Post", postSchema)