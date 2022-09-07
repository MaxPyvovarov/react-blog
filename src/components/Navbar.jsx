import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	align-items: center;
	margin: 0 auto;
	padding: 20px 40px;
	background-color: #20c997;
`;

const ListGroup = styled.ul`
	display: flex;
	gap: 40px;
`;

const NavbarLink = styled(NavLink)`
	color: #fff;
	opacity: 1;
	text-transform: uppercase;
	font-weight: 700;
	transition: opacity 0.3s ease;
	:hover {
		opacity: 0.7;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<div>
				<ListGroup>
					<li>
						<NavbarLink to='/'>All posts</NavbarLink>
					</li>
					<li>
						<NavbarLink to='/create'>Create new post</NavbarLink>
					</li>
				</ListGroup>
			</div>
		</Nav>
	);
};

export default Navbar;
