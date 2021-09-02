import React, { useContext } from 'react'
import { UserContext } from "../../context/UserProvider"
import "./likeDislike.css"

export default function LikeBtn(props) {
    const { 
        likeDislikeClicked
      } = useContext(UserContext)

    return( 
        <button 
            disabled={props.highlighted} 
            className={props.highlighted ? 
            "highlighted" : 
            null} 
            onClick={() => likeDislikeClicked(true, props._id, props.isPost)}
        >
            Like {props.likesTotal}
        </button>
    )
}