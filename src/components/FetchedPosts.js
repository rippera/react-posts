import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/action';

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  if (!posts.length) {
    return (
      <button
        onClick={() => dispatch(fetchPosts())}
        className='btn btn-primary'
      >
        Load Posts
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default FetchedPosts;
