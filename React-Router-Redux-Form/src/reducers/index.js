import { combineReducers } from 'redux';
import PostsReducer from './re'

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
