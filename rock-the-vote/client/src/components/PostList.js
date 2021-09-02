import React from 'react'
import Post from './Post.js'

export default function PostList(props){

  const { posts } = props
  
  return (
    <div className="post-list">
      { posts.sort((a, b) => { // goes through and sorts based on which one has a greater length of likes
        let bTotal = b.likeDislike.filter(item => item.likeDislike === true).length
        let aTotal = a.likeDislike.filter(item => item.likeDislike === true).length
        return bTotal - aTotal 
      }).map(post => 
          <Post 
            post={ post } 
            key={ post._id }
          />
        )}
    </div>
  )
}