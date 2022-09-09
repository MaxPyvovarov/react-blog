import React, {useState} from 'react';
import MainPageButton from '../components/UI/MainPageButton/MainPageButton';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';

const Header = styled.h1`
	color: #fff;
	text-transform: uppercase;
	margin-top: 30px;
`;

const TitleInputWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;

	label {
		color: #fff;
		font-size: 24px;
	}

	input {
		border-radius: 10px;
		border: 1px solid #fff;
		font-family: Arial, sans-serif;
		outline: none;
		font-size: 20px;
		max-width: 500px;
		padding: 5px;
	}
`;

const BodyInputWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;

	label {
		color: #fff;
		font-size: 24px;
	}

	textarea {
		border-radius: 10px;
		border: 1px solid #fff;
		font-family: Arial, sans-serif;
		outline: none;
		font-size: 20px;
		width: 100%;
		word-wrap: break-word;
		height: 300px;
		padding: 10px;
		resize: none;
	}
`;

const SubmitButton = styled.button`
	font-weight: 700;
	color: #fff;
	margin-top: 10px;
	padding: 15px 40px;
	background: none;
	border: 1px solid #fff;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.3s ease;

	:hover {
		opacity: 0.7;
	}
`;

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		axios.post('https://bloggy-api.herokuapp.com/posts', {
			title,
			body,
		});
		setTimeout(() => navigate('/'), 1000);
	}

	return (
		<>
			<MainPageButton />
			<Header>New post</Header>
			<form onSubmit={handleSubmit}>
				<TitleInputWrapper>
					<label htmlFor='titleInput'>Title</label>
					<input
						type='text'
						id='titleInput'
						value={title || ''}
						onChange={e => setTitle(e.target.value)}
						placeholder='Title ...'
					></input>
				</TitleInputWrapper>
				<BodyInputWrapper>
					<label htmlFor='bodyInput'>Body</label>
					<textarea
						type='text'
						id='bodyInput'
						value={body || ''}
						onChange={e => setBody(e.target.value)}
						placeholder='Your post ...'
					></textarea>
				</BodyInputWrapper>
				<div>
					<SubmitButton type='submit'>Save</SubmitButton>
				</div>
			</form>
		</>
	);
};

export default CreatePost;
