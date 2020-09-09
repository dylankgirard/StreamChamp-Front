import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
	return (
		<Navbar className='header' variant='dark' expand='lg' sticky='top'>
			<Navbar.Brand id='main-brand' as={Link} to='/'>
				Stream-Champ
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Container className='justify-content-end mr-0 pr-0'>
					<Nav>
						<Nav.Link id='brand' as={Link} to='/login'>
							Log-In
						</Nav.Link>
						<Nav.Link id='brand' as={Link} to='/signup'>
							Sign-Up
						</Nav.Link>
						<Nav.Link id='brand' as={Link} to='/browse'>
							Browse
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
