import React, {useEffect} from 'react';
import MainPageButton from '../components/MainPageButton/MainPageButton';
import {connect} from 'react-redux';
import {deletePost, selectPost} from '../store/actions/blog';
import {fetchPost} from '../store/actions/post';
import {NavLink, useNavigate} from 'react-router-dom';
import Loader from '../components/Loader/Loader';

import {Trash} from '@styled-icons/bootstrap/Trash';
import {Edit} from '@styled-icons/fluentui-system-filled/Edit';
import styled from 'styled-components';

const PostBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 25px;
	margin: 10px 0;
	border: 1px solid #fff;
	border-radius: 10px;
	background-color: #290606;

	p {
		color: #fff;
	}
`;

const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	opacity: 1;

	h3 {
		color: #fff;
		text-transform: uppercase;
	}

	div {
		display: flex;
		gap: 10px;
		align-items: flex-start;

		button {
			outline: none;
			background: none;
			border: none;
			:hover {
				cursor: pointer;
			}
		}
	}
`;

const Delete = styled(Trash)`
	color: #fff;
	width: 25px;
	height: auto;
	transition: all 0.3s ease;
	:hover {
		transform: scale(1.2);
	}
`;

const Update = styled(Edit)`
	color: #fff;
	width: 25px;
	height: auto;
	transition: all 0.3s ease;
	:hover {
		transform: scale(1.2);
	}
`;

const PostPage = props => {
	const post = props.post;
	const navigate = useNavigate();

	useEffect(() => {
		props.fetchPost(props.activePostId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleDeletePost(id) {
		props.deletePost(id);
		navigate('/');
	}

	function handleSelectPost(id) {
		props.selectPost(id);
	}

	return (
		<>
			<MainPageButton />
			{props.loading ? (
				<Loader />
			) : (
				<PostBlock>
					<PostHeader>
						<h3>{post.title}</h3>
						<div>
							<NavLink
								to={`/edit/${post.id}`}
								onClick={() => handleSelectPost(post.id)}
							>
								<Update />
							</NavLink>
							<button onClick={() => handleDeletePost(post.id)}>
								<Delete />
							</button>
						</div>
					</PostHeader>
					<p>{post.body}</p>
				</PostBlock>
			)}
		</>
	);
};

function mapStateToProps(state) {
	return {
		post: state.post.post,
		loading: state.post.loading,
		error: state.post.error,
		activePostId: state.blog.activePostId,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPost: id => dispatch(fetchPost(id)),
		deletePost: id => dispatch(deletePost(id)),
		selectPost: id => dispatch(selectPost(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
