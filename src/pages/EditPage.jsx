import React, {useState} from 'react';
import axios from 'axios';
import MainPageButton from '../components/UI/MainPageButton/MainPageButton';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';

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

const EditPage = props => {
	const post = props.post;
	const [title, setTitle] = useState(post.title);
	const [body, setBody] = useState(post.body);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		axios.put(`https://bloggy-api.herokuapp.com/posts/${post.id}`, {
			title,
			body,
		});
		setTimeout(() => navigate('/'), 1000);
	}

	return (
		<>
			<MainPageButton />
			<Header>Edit post</Header>
			<form onSubmit={handleSubmit}>
				<TitleInputWrapper>
					<label htmlFor='titleInput'>Title</label>
					<input
						type='text'
						id='titleInput'
						value={title || ''}
						onChange={e => setTitle(e.target.value)}
					></input>
				</TitleInputWrapper>
				<BodyInputWrapper>
					<label htmlFor='bodyInput'>Body</label>
					<textarea
						type='text'
						id='bodyInput'
						value={body || ''}
						onChange={e => setBody(e.target.value)}
					></textarea>
				</BodyInputWrapper>
				<div>
					<SubmitButton type='submit'>Save</SubmitButton>
				</div>
			</form>
		</>
	);
};

function mapStateToProps(state) {
	return {
		post: state.blog.posts.find(post => post.id === state.blog.activePostId),
	};
}

export default connect(mapStateToProps)(EditPage);
