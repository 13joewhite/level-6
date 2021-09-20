
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../context/UserProvider"
import "../css/Footer.css"

export default function Navbar(){ 
  const { logout } = useContext(UserContext)

  return (
    <div className="footer">
      <p>Copyright 2021, All Rights Reserved</p>
      <ul>
        <Link to="/profile" className="links">Profile</Link>
        <Link to="/public" className="links">Public</Link>
        <Link onClick={logout} className="links">Logout</Link>        
      </ul>
    </div>
  )
}