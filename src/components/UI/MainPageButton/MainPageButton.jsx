import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';

const Link = styled(NavLink)`
	text-decoration: underline;
	color: #fff;
	font-weight: 700;
`;

const MainPageButton = () => {
	return <Link to='/'>Return to main page</Link>;
};

export default MainPageButton;
