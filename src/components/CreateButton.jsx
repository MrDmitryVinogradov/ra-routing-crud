import React from 'react'
import { Link } from 'react-router-dom'

function CreateButton() {
  return (
    <div className="site-header">
      <Link to='/new' className="create-btn"> Создать пост </Link>
    </div>
  );
}

export default CreateButton
