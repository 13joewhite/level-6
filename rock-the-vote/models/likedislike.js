const mongoose = require('mongoose')
const Schema = mongoose.Schema

likeDislikeSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    likeDislike: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("LikeDislike", likeDislikeSchema)