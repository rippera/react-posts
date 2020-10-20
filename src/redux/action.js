import { CREATE_POST, FETCH_POSTS, HIDE_ALERT, SHOW_ALERT } from './types';

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};
export const showAlert = (text) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 1000);
  };
};
export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
  };
};
