import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <div className='text-muted'>No posts available</div>;
  }
  return syncPosts.map((post) => <Post post={post} key={post} />);
};
const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};
export default connect(mapStateToProps, null)(Posts);
