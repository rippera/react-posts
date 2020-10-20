import { combineReducers } from 'redux';
import { postReducer } from './postsReducer';
import { appReducer } from './appReducer';
export const rootReducer = combineReducers({
  posts: postReducer,
  app: appReducer,
});
