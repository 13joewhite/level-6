
import React, { useContext } from 'react'
import { UserContext } from "../context/UserProvider"
import PostForm from './PostForm.js'
import PostList from './PostList.js'
import Post from './Post.js'


export default function Profile(){
  const { 
    user: { username }, 
    addPost, 
    posts
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Post</h3>
      <PostForm 
        addPost={addPost}
      />
      <h3>Your Posts</h3>
      <PostList posts={posts}/>
    </div>
  )
}