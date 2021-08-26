import React from 'react'
import Post from './Post.js'

export default function PostList(props){

  const { posts } = props
  
  return (
    <div className="post-list">
      { posts.map(post => 
        <Post post={post} key={post._id}/>

        )
      }
    </div>
  )
}