import React from 'react'

export default function Post(props){
  const { title, description, imgUrl } = props

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={imgUrl} width={300}/>
    </div>
  )
}