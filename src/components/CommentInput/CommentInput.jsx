import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchPost} from '../../store/actions/post';

const Input = styled.input`
	border-radius: 10px;
	border: 1px solid #fff;
	font-family: Arial, sans-serif;
	outline: none;
	font-size: 20px;
	width: 100%;
	padding: 5px;
	margin-bottom: 20px;
`;

const CommentInput = ({postId, fetchPost}) => {
	const [comment, setComment] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		axios.post('https://bloggy-api.herokuapp.com/comments', {
			postId,
			body: comment,
		});
		setTimeout(() => fetchPost(postId), 1000);
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type='text'
				placeholder='Type a new comment ...'
				value={comment || ''}
				onChange={e => setComment(e.target.value)}
			></Input>
		</form>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		fetchPost: id => dispatch(fetchPost(id)),
	};
}

export default connect(null, mapDispatchToProps)(CommentInput);
