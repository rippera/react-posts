import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className='container'>
      <PostForm />
      <div className='row'>
        <div className='col-lg-6'>
          <h3 className='text-muted text-capitalize font-weight-bold text-center'>
            new posts
          </h3>
          <Posts />
        </div>
        <div className='col-lg-6'>
          <h3 className='text-muted text-capitalize font-weight-bold text-center'>
            old posts
          </h3>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
