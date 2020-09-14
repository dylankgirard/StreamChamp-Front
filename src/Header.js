import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';

function Header(props) {
	if (!props.user) return;
	// console.log(props.user.user);
	return (
		<Navbar className='header' variant='dark' expand='lg' sticky='top'>
			<Navbar.Brand id='main-brand' as={Link} to='/'>
				Stream-Champ
			</Navbar.Brand>
			<Navbar.Brand className='justify-content-end'>
				{!props.user.user ? '' : `Welcome, ${props.user.user.name}`}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
				<Container className='justify-content-end mr-0 pr-0'>
					<Nav>
						<Nav.Link id='brand' as={Link} to='/login'>
							Login
						</Nav.Link>
						<Nav.Link id='brand' as={Link} to='/signup'>
							Sign Up
						</Nav.Link>
						<Nav.Link id='brand' as={Link} to='/browse'>
							Browse
						</Nav.Link>
						{props.user.user ? (
							<Nav.Link id='brand' as={Link} to='/favorites'>
								Favorites
							</Nav.Link>
						) : (
							''
						)}
						{props.user.user ? (
							<Nav.Link id='brand' as={Link} to='/profile'>
								Profile
							</Nav.Link>
						) : (
							''
						)}
						{props.user.user ? (
							<Nav.Link
								id='brand'
								as={Link}
								to='/'
								onClick={() => {props.setUser({ user: null })}}>
								Logout
							</Nav.Link>
						) : (
							''
						)}
					</Nav>
				</Container>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
