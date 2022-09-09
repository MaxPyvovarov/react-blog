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
	background-color: #290606;

	p {
		color: #fff;
	}
`;

const CommentsListItem = ({comment}) => {
	console.log('item', comment);
	return (
		<Comment>
			<p>{comment.body}</p>
		</Comment>
	);
};

export default CommentsListItem;
