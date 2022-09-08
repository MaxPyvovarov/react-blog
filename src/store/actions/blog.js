import axios from 'axios';
import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_ERROR,
	SELECT_POST,
	DELETE_POST_ERROR,
	DELETE_POST_SUCCESS,
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

export function selectPost(id) {
	return {
		type: SELECT_POST,
		id,
	};
}

export function deletePost(id) {
	return async dispatch => {
		dispatch(fetchPostsStart());
		try {
			await axios.delete(`https://bloggy-api.herokuapp.com/posts/${id}`);
			dispatch(deletePostSuccess(id));
		} catch (error) {
			dispatch(deletePostError(error));
		}
	};
}

export function deletePostSuccess(id) {
	return {
		type: DELETE_POST_SUCCESS,
		id,
	};
}

export function deletePostError(error) {
	return {
		type: DELETE_POST_ERROR,
		error,
	};
}
