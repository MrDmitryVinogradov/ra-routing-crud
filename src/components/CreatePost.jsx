import React from 'react'
import { Link } from 'react-router-dom'

function CreatePost({ closeWindow, publishPost, handleInput }) {
  return (
    <div className="create-post">
      <div className="new-post-header">
        <div className="post-type"> Публикация <span className="icon icon-pub"></span> </div>
        <div className="post-type"> Фото/видео <span className="icon icon-media"></span> </div>
        <div className="post-type"> Прямой эфир <span className="icon icon-cast"></span> </div>
        <div className="post-type"> Ещё <span className="icon icon-more"></span> </div>
        <Link to={'/'} className="close-create-post" onClick={closeWindow}> </Link>
      </div>
      <div className="new-post-content">
        <img className="user-pic" src='https://images.generated.photos/uakZsJ_Wn5NHxm9Wm_Ao-jl96lhM0SsAnf8YpWQtxEQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUxMDg4LmpwZw.jpg' alt='user'></img>
        <input className="new-post-input" placeholder="Введите текст" onChange={handleInput}></input>
      </div>
      <div className="new-post-footer">
        <Link to='/' className="publish-btn" onClick={publishPost}> Опубликовать </Link>
      </div>
    </div>
  )
}

export default CreatePost
