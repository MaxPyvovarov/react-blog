import React from 'react';
import styled from 'styled-components';

const Comment = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid #fff;
	border-radius: 10px;
	background-color: #dd1c1a;

	p {
		color: #fff;
	}
`;

const CommentsListItem = ({comment}) => {
	return (
		<Comment>
			<p>{comment.body}</p>
		</Comment>
	);
};

export default CommentsListItem;
