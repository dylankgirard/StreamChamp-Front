import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';


class SignUpPage extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			bio: '',
		};
	}

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleBioChange = (e) => {
		this.setState({ bio: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8000/users/`, {
				name: this.state.name,
				bio: this.state.bio,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				this.setState({ err: err });
			});
			
		
	};

	render() {
		
		return (
			<Container>
				<h1>Create an Account</h1>
				<Form>
					<Form.Group controlId='formBasicText'>
						<Form.Label>User Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter A User Name'
							onChange={this.handleNameChange}
						/>
					</Form.Group>
					<Form.Group controlId='formBasicText'>
						<Form.Label>Profile Bio</Form.Label>
						<Form.Control
							type='text'
							placeholder='Description'
							onChange={this.handleBioChange}
						/>
					</Form.Group>

					{/* <Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group> */}

					<Button variant='primary' type='submit' onClick={this.handleSubmit}>
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default SignUpPage;
