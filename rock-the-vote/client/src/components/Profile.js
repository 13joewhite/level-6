import React, { useContext, useEffect } from 'react'
import { UserContext } from "../context/UserProvider"
import PostForm from './PostForm.js'
import PostList from './PostList.js'
import "../css/PostForm.css"

export default function Profile(){
  const { 
    user: { username }, 
    addPost,  
    posts,
    getUserPosts
  } = useContext(UserContext)

  useEffect(() => { // anytime the page gets loaded it calls getUserPosts which is keeping the posts rendered to the page
    getUserPosts()
  }, [])
    
  return (
    <div className="profile">
      <div className="form">
        <h1 className="text-primary">Welcome {username}!</h1>
        <h3 className="text-secondary">Add A Post</h3>
        <PostForm 
          addPost={addPost}
        />        
        <h3 className="text-primary">Your Posts</h3>
      </div>
      <PostList 
        posts={posts}
      />
    </div>
  )
}