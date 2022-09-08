import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, deletePost} from '../store/actions/blog';
import {NavLink} from 'react-router-dom';
import Loader from '../components/Loader/Loader';

import styled from 'styled-components';
import {Trash} from '@styled-icons/bootstrap/Trash';
import {Edit} from '@styled-icons/fluentui-system-filled/Edit';

const Container = styled.div`
	padding: 15px 15px 0;
	margin: 0 auto;
	width: 80%;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;

	h1 {
		color: #fff;
	}

	button {
		font-weight: 700;
		color: #fff;
		padding: 15px 20px;
		background: none;
		border: 1px solid #fff;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;

		:hover {
			opacity: 0.7;
		}
	}
`;

const PostList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Post = styled.div`
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

const PostFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;

	button {
		font-weight: 700;
		color: #fff;
		padding: 10px;
		background: none;
		border: 1px solid #fff;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;

		:hover {
			opacity: 0.7;
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

function renderPosts(props) {
	function handleDeletePost(id) {
		props.deletePost(id);
		//TODO
	}

	return props.posts.map(post => (
		<Post key={post.id}>
			<PostHeader>
				<h3>{post.title}</h3>
				<div>
					<NavLink to='/edit:id'>
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
					<button>Show more</button>
				</NavLink>
			</PostFooter>
		</Post>
	));
}

const Blog = props => {
	useEffect(() => {
		props.fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Header>
				<h1>Posts</h1>
				<NavLink to='/create'>
					<button>Create new post +</button>
				</NavLink>
			</Header>
			{props.loading ? <Loader /> : <PostList>{renderPosts(props)}</PostList>}
		</Container>
	);
};

function mapStateToProps(state) {
	return {
		posts: state.blog.posts,
		loading: state.blog.loading,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () => dispatch(fetchPosts()),
		deletePost: id => dispatch(deletePost(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
