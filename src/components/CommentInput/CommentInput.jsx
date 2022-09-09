import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

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

const CommentInput = ({postId}) => {
	const [comment, setComment] = useState('');
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		await axios.post('https://bloggy-api.herokuapp.com/comments', {
			postId,
			body: comment,
		});
		setTimeout(() => navigate(`/post/${postId}`), 1000);
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

export default CommentInput;
