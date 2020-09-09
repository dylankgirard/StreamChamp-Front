import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

class LoginPage extends Component {
	render() {
		return (
			<Container>
				<h1>Login To Your Account</h1>
				<Form>
					<Form.Group controlId='formBasicText'>
						<Form.Label>User Name</Form.Label>
						<Form.Control type='text' placeholder='Enter Your User Name' />
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default LoginPage;
