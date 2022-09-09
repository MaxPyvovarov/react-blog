import axios from 'axios';
import {
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
	FETCH_POST_ERROR,
} from './actionTypes';

export function fetchPost(id) {
	return async dispatch => {
		dispatch(fetchPostStart());
		try {
			const response = await axios.get(
				`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments
`
			);

			const post = response.data;
			console.log('response', post);
			dispatch(fetchPostSuccess(post));
		} catch (error) {
			dispatch(fetchPostError(error));
		}
	};
}

export function fetchPostStart() {
	return {
		type: FETCH_POST_START,
	};
}

export function fetchPostSuccess(post) {
	return {
		type: FETCH_POST_SUCCESS,
		post,
	};
}

export function fetchPostError(error) {
	return {
		type: FETCH_POST_ERROR,
		error,
	};
}
