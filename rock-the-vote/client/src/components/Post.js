import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from "../context/UserProvider"
import LikeBtn from "./likeDislike/LikeBtn"
import DislikeBtn from "./likeDislike/DislikeBtn"

export default function Post(props){
  const [isPost, setIsPost] = useState(false)
  const [highlight, setHighlight] = useState({liked: false, disliked: false, none: false})
  const [likesTotal, setLikesTotal] = useState(0)
  const [dislikesTotal, setDislikesTotal] = useState(0)

  const {
    user, posts
  } = useContext(UserContext)

  const { title, description, imgUrl, _id, likeDislike } = props.post

  useEffect(() => {
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
    
  }, [_id])

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={imgUrl} width={300}/>
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
  )
}