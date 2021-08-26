import React, { useContext } from 'react'
import { UserContext } from "../../context/UserProvider"
import "./likeDislike.css"

export default function DislikeBtn(props) {
    const { 
        likeDislikeClicked 
      } = useContext(UserContext)

    return (
        <button 
            disabled={props.highlighted} 
            className={props.highlighted ? 
            "highlighted" : 
            null} 
            onClick={() => likeDislikeClicked(false, props._id, props.isPost)}>
            Dislike: {props.dislikesTotal}
        </button>
    )
}