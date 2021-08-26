import React, { useContext, useEffect } from 'react'
import { UserContext } from "../context/UserProvider"
import PostList from './PostList.js'

export default function Public(){ // do what was done in the profile.js here for the getAllPosts

  const {
    posts, 
    getAllPost,
  } = useContext(UserContext)
 
  useEffect(() => { // anytime the page gets loaded it calls getAllPosts which is keeping the posts rendered to the page
    getAllPost()
  }, [])

  return (
    <div className="profile">
      <PostList posts={posts}/>
    </div>
  )
}