import React from 'react'
import Post from './Post'
import FooterPostButtons from './FooterPostButtons'
import FooterPostComment from './FooterPostComment'

function PostsList({ posts, handleClick }) {
  return (
    <div className='feed'>
      {posts.map((el) =>
        <div className='full-post' id={el.id} key={el.id}>
          <Post id={el.id} onClick={handleClick} content={el.content} />
          <FooterPostButtons />
          <FooterPostComment />
        </div>
      )}
    </div>
  )
}

export default PostsList
