import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../store/actions/blog';

import styled from 'styled-components';

const Container = styled.div`
	padding: 15px;
	margin: 0 auto;
	width: 80%;

	h1 {
		color: #fff;
	}
`;

const Posts = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Post = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 30px;
	margin: 10px 0;
	background-color: rgba(136, 0, 255, 0.2);

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
		gap: 5px;
	}
`;

const PostFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;

	button {
		padding: 5px 10px;
	}
`;

const Blog = props => {
	useEffect(() => {
		props.fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<h1>Posts</h1>
			<Posts>
				{props.posts.map(post => (
					<Post key={post.id}>
						<PostHeader>
							<h3>{post.title}</h3>
							<div>
								<button>Edit</button>
								<button>Delete</button>
							</div>
						</PostHeader>
						<p>{post.body}</p>
						<PostFooter>
							<button>Show more</button>
						</PostFooter>
					</Post>
				))}
			</Posts>
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
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
