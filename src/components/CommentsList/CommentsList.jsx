import React from 'react';
import {connect} from 'react-redux';
import CommentsListItem from './CommentsListItem/CommentsListItem';

const CommentsList = props => {
	return props.comments.map(comment => (
		<CommentsListItem key={comment.id} comment={comment} />
	));
};

function mapStateToProps(state) {
	return {
		comments: state.post.comments,
	};
}

export default connect(mapStateToProps)(CommentsList);
