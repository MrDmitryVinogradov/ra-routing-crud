import './App.css'
import React, { useEffect, useState } from "react";
import {Route, Routes } from "react-router-dom";
import CreateButton from "./components/CreateButton"
import CreatePost from "./components/CreatePost"
import PostsList from "./components/PostsList"
import SinglePost from './components/SinglePost';
import EditPost from './components/EditPost'


export default function App() {

  const [posts, setPosts] = useState([]);
  const [currentID, setCurrentID] = useState('');
  const [content, setContent] = useState('')

  function getPosts() {
    fetch('http://localhost:7777/posts')
    .then(resp => resp.json())
    .then(json => {
      setPosts(json)
    });
  };

  useEffect(() => {
    console.log('mount')
    getPosts();
  }, [currentID]);

  const handleInput = (evt) => {
    setContent(evt.target.value);
  }

  const publishPost = () => {
    
    let id;
    posts[0] ? id = posts[0].id + 1 : id = 0;
    if (!content) {
      return
    }

    const body = {
      id: id,
      content: content,
    }
    console.log(body);
    fetch('http://localhost:7777/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body),
    })
      .then(() => {
        getPosts();
        setCurrentID('')
      })
  }

  const setID = (evt) => {
    setCurrentID(evt.target.closest('.post').id);
    console.log(currentID);
  }

  const removePost = (id) => {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCurrentID('');
        getPosts();
      })
  }

  const editPost = (evt) => {
    setContent(evt.target.closest('.full-post').querySelector('.post-content').innerText);
    setCurrentID(evt.target.closest('.full-post').querySelector('.post').id)
  }
  
  const publishChangedPost = () => {
    if (!content) {
      return
    }

    const body = {
      id: Number(currentID),
      content: content,
    }
    console.log(body);
    fetch('http://localhost:7777/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body),
    })
      .then(() => {
        getPosts();
        setCurrentID('')
      })
  }

  return (
    <div className="App">
      <CreateButton />
        <Routes>
        <Route path="/" element={<PostsList posts={posts} handleClick={setID}/>}/>
        <Route path="/new" element={<CreatePost handleInput={handleInput} publishPost={publishPost} />} />
        <Route path={`/posts/:id`} element={<SinglePost posts={posts} handleRemove={removePost} handleEdit={editPost} />} />
        <Route path={`/edit`} element={<EditPost value={content} id={currentID} handleChange={handleInput} handlePublish={publishChangedPost} />} /> 
      </Routes>
    </div>
  );
}
