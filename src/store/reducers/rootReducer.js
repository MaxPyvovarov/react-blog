import {combineReducers} from 'redux';
import blogReducer from './blog';
import postReducer from './post';

export default combineReducers({
	blog: blogReducer,
	post: postReducer,
});
