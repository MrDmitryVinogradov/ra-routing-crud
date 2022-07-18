import React from 'react'
import { Link, useParams } from 'react-router-dom';


function Post(props) {
  const { id } = useParams();
  return (
    <div className="post-wrapper">
      <Link to={!id ? `posts/${props.id}` : ''} className="post" id={props.id}>
        <div className="post-header">
          <img className="user-pic" src='https://images.generated.photos/uakZsJ_Wn5NHxm9Wm_Ao-jl96lhM0SsAnf8YpWQtxEQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUxMDg4LmpwZw.jpg' alt='user'></img>
          <div className="user-name">User Userovich</div>
        </div>
        <div className="post-content">{props.content} </div>
      </Link>
      {props.children}
    </div>
  )
}

export default Post
