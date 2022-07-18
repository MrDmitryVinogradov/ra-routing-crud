import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Post from './Post'
import FooterPostButtons from './FooterPostButtons'


function SinglePost({ posts, handleRemove, handleEdit }) {
  const { id } = useParams();
  let post = posts.find((el) => el.id === Number(id))
  return (
    <div className='full-post'>
      <Post id={post.id} content={post.content} />
      <FooterPostButtons />
      <div className='edit-remove-group'>
        <Link to={`/edit`} className='edit-post-btn' onClick={handleEdit}> Изменить </Link>
        <Link to='/' className='remove-post-btn' onClick={() => handleRemove(id)}> Удалить </Link>
      </div>
    </div>
  )
}

export default SinglePost