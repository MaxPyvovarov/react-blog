import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {deletePost, selectPost} from '../../../store/actions/blog';

import {Trash} from '@styled-icons/bootstrap/Trash';
import {Edit} from '@styled-icons/fluentui-system-filled/Edit';
import styled from 'styled-components';

const PostBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 25px;
	margin: 10px 0;
	border: 1px solid #050505;
	border-radius: 10px;
	background-color: #f5f1e3;

	p {
		color: #050505;
	}
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

const PostFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;

	button {
		font-weight: 700;
		color: #050505;
		padding: 10px;
		background: none;
		border: 1px solid #050505;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;

		:hover {
			opacity: 0.7;
		}
	}
`;

const Delete = styled(Trash)`
	color: #dd1c1a;
	width: 25px;
	height: auto;
	transition: all 0.3s ease;
	:hover {
		transform: scale(1.2);
	}
`;

const Update = styled(Edit)`
	color: #43b929;
	width: 25px;
	height: auto;
	transition: all 0.3s ease;
	:hover {
		transform: scale(1.2);
	}
`;

const Post = props => {
	const post = props.postItem;

	function handleDeletePost(id) {
		props.deletePost(id);
	}

	function handleSelectPost(id) {
		localStorage.setItem('activePostId', id);
		props.selectPost(id);
	}

	return (
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
				<p>{post.body}</p>
				<PostFooter>
					<NavLink to={`/post/${post.id}`}>
						<button onClick={() => handleSelectPost(post.id)}>Show more</button>
					</NavLink>
				</PostFooter>
			</PostBlock>
		</>
	);
};

function mapStateToProps(state) {
	return {
		post: state.blog.posts.find(post => post.id === state.blog.activePostId),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		deletePost: id => dispatch(deletePost(id)),
		selectPost: id => dispatch(selectPost(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
