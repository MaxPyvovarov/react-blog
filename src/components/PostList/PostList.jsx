import React from 'react';
import {connect} from 'react-redux';
import PostListItem from './PostListItem/PostListItem';

const PostList = props => {
	return props.posts.map(post => (
		<PostListItem key={post.id} postItem={post} />
	));
};

function mapStateToProps(state) {
	return {
		posts: state.blog.posts,
	};
}

export default connect(mapStateToProps)(PostList);
