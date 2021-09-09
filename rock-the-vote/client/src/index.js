
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from "./context/UserProvider"
import App from './App.js'
import './css/styles.css'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App/>
    </UserProvider> 
  </BrowserRouter>, 
  document.getElementById('root')
)