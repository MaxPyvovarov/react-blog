import React, {useEffect} from 'react';
import MainPageButton from '../components/UI/MainPageButton/MainPageButton';
import Loader from '../components/UI/Loader/Loader';
import {connect} from 'react-redux';
import {deletePost, selectPost} from '../store/actions/blog';
import {fetchPost} from '../store/actions/post';
import {NavLink, useNavigate} from 'react-router-dom';
import CommentsList from '../components/CommentsList/CommentsList';
import CommentInput from '../components/CommentInput/CommentInput';

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
	background-color: #f5f1e3;
`;

const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	opacity: 1;

	h3 {
		color: #050505;
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

const WhiteP = styled.p`
	color: #050505;
`;

const Delete = styled(Trash)`
	color: #dd1c1a;
	width: 25px;
	height: auto;
	transition: all 0.3s ease;
	:hover {
		scale: 1.2;
	}
`;

const Update = styled(Edit)`
	color: #43b929;
	width: 25px;
	height: auto;
	transition: all 0.3s ease;
	:hover {
		scale: 1.2;
	}
`;

const CommentsHeader = styled.h2`
	color: #fff;
	margin: 40px 0 10px;
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
				<>
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
						<WhiteP>{post.body}</WhiteP>
					</PostBlock>
					<CommentsHeader>Comments</CommentsHeader>
					<CommentInput postId={post.id} />
					{props.comments.length > 0 ? (
						<CommentsList />
					) : (
						<WhiteP>No comments yet</WhiteP>
					)}
				</>
			)}
		</>
	);
};

function mapStateToProps(state) {
	return {
		post: state.post.post,
		loading: state.post.loading,
		comments: state.post.comments,
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
