import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from "../context/UserProvider"
import LikeBtn from "./likeDislike/LikeBtn"
import DislikeBtn from "./likeDislike/DislikeBtn"

export default function Post(props){
  const [userComment, setUserComment] = useState('') //Do I need to create state?
  const [isPost, setIsPost] = useState(false)
  const [highlight, setHighlight] = useState({liked: false, disliked: false, none: false})
  const [likesTotal, setLikesTotal] = useState(0)
  const [dislikesTotal, setDislikesTotal] = useState(0)

  const {
    user,
    commenting
  } = useContext(UserContext)

  const { title, description, imgUrl, _id, likeDislike } = props.post

  
  const orderLikes = () => {
    let userLikes = likeDislike.filter(item => item.user === user._id)
    if(userLikes.length > 0) {
      let isLikes = userLikes[0].likeDislike
      setIsPost(false)
      setHighlight({liked: isLikes ? true : false, disliked: !isLikes ? true : false, none: false})
    } else {
      setIsPost(true)
      setHighlight({liked: false, disliked: false, none: false})
    }
    
    let likes = likeDislike.filter(item => item.post === _id && item.likeDislike === true).length
    let dislikes = likeDislike.filter(item => item.post === _id && item.likeDislike === false).length
    
    setLikesTotal(likes)
    setDislikesTotal(dislikes)
  }
  
  // console.log(props.post)
  
  function displayComments() { //Why cant I get this to display?
    return props.post.comment.map(comment => {
      return <p>{comment.comment}</p> 
    })
  }

    function handleChange(e){
      const {value} = e.target
      setUserComment(value)
    }

    console.log(userComment)

  function handleComment(e) {
    e.preventDefault()
    commenting({user: user._id, post: _id, comment: userComment})
    setUserComment('')
  }

  useEffect(() => {
    orderLikes()
  }, [props.post])

  return (
    <div className="post">
      <div className="postHeader">
        <h1>{title}</h1>
        <h6>{description}</h6>
      </div>
      <img src={imgUrl} alt={imgUrl}/>
      <div className="likeBtns">
        <LikeBtn
          isPost={isPost}
          highlighted={highlight.liked}
          _id={_id}
          likesTotal={likesTotal}
        />
        <DislikeBtn
          isPost={isPost}
          highlighted={highlight.disliked}
          _id={_id}
          dislikesTotal={dislikesTotal}
        /> 
      </div>

      <form className="commentForm" onSubmit={handleComment}>
        <input 
        type="text" 
        name="userComment" 
        value={userComment} 
        onChange={handleChange} 
        placeholder="Comment"
        />
        <button>Add Comment</button>
      </form>
      <div className="postedComments">
        {displayComments()}        
      </div>

    </div>
  )
}