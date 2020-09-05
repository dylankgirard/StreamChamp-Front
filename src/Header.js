import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<Navbar className='header' variant='dark' expand='lg'>
				<Navbar.Brand id='brand' as={Link} to='/'>
					StreamChamp
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<Nav.Link id='brand' as={Link} to='/browse'>
							Browse
						</Nav.Link>
						<Nav.Link id='brand' as={Link} to='/search'>
							Search
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
