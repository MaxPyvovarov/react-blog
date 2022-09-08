import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_ERROR,
	DELETE_POST_SUCCESS,
	DELETE_POST_ERROR,
} from '../actions/actionTypes';

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

export default function blogReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.posts,
			};
		case FETCH_POSTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case DELETE_POST_SUCCESS:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.id),
				loading: false,
			};
		case DELETE_POST_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
