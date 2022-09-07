import axios from 'axios';
import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_ERROR,
} from './actionTypes';

export function fetchPosts() {
	return async dispatch => {
		dispatch(fetchPostsStart());
		try {
			const response = await axios.get(
				'https://bloggy-api.herokuapp.com/posts'
			);
			const posts = [];

			response.data.forEach(post => posts.push(post));

			dispatch(fetchPostsSuccess(posts));
		} catch (error) {
			dispatch(fetchPostsError(error));
		}
	};
}

export function fetchPostsStart() {
	return {
		type: FETCH_POSTS_START,
	};
}

export function fetchPostsSuccess(posts) {
	return {
		type: FETCH_POSTS_SUCCESS,
		posts,
	};
}

export function fetchPostsError(error) {
	return {
		type: FETCH_POSTS_ERROR,
		error,
	};
}
