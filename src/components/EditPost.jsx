import React from 'react'
import { Link } from 'react-router-dom'

function EditPost({ value, id, handleChange, handlePublish }) {
  return (
    <div className="edit-post">
      <div className="edit-post-header">
        <div className="edit-header"> Редактировать публикацию </div>
        <Link to={`/posts/${id}`} className="close-create-post"> </Link>
      </div>
      <div className="new-post-content">
        <img className="user-pic" src='https://images.generated.photos/uakZsJ_Wn5NHxm9Wm_Ao-jl96lhM0SsAnf8YpWQtxEQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUxMDg4LmpwZw.jpg' alt='user'></img>
        <input className="new-post-input" value={value} onChange={handleChange}></input>
      </div>
      <div className="new-post-footer">
        <Link to='/' className="publish-btn" onClick={handlePublish} > Сохранить </Link>
      </div>
    </div>
  )
}

export default EditPost
