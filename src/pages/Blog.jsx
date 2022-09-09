import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, selectPost, deletePost} from '../store/actions/blog';
import {NavLink} from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import PostList from '../components/PostList/PostList';

import styled from 'styled-components';

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

const ErrorMessage = styled.p`
	color: #fff;
	font-size: 20px;
	text-align: center;
	margin-top: 50px;
	font-weight: 700;
`;

const Blog = props => {
	useEffect(() => {
		props.fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header>
				<h1>Posts</h1>
				<NavLink to='/create'>
					<button>Create new post +</button>
				</NavLink>
			</Header>
			{props.loading && props.posts.length !== 0 ? <Loader /> : <PostList />}
			{props.error && <ErrorMessage>{props.error.message}</ErrorMessage>}
		</>
	);
};

function mapStateToProps(state) {
	return {
		posts: state.blog.posts,
		loading: state.blog.loading,
		error: state.blog.error,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () => dispatch(fetchPosts()),
		deletePost: id => dispatch(deletePost(id)),
		selectPost: id => dispatch(selectPost(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
