import {
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
	FETCH_POST_ERROR,
} from '../actions/actionTypes';

const initialState = {
	post: [],
	loading: false,
	error: null,
};

export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_POST_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_POST_SUCCESS:
			return {
				...state,
				post: action.post,
				loading: false,
			};
		case FETCH_POST_ERROR:
			return {
				...state,
				error: action.error,
				loading: false,
			};
		default:
			return state;
	}
}
