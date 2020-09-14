import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import SignUpModal from './SignUpModal';
import axios from 'axios';

class SignUpPage extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			bio: '',
			signUpModalShow: false,
			signUpSetModalShow: false,
			error: null,
		};
	}

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleBioChange = (e) => {
		this.setState({ bio: e.target.value });
	};

	handleSignUpModalShow = () => {
		this.setState({ signUpModalShow: true, signUpSetModalShow: true });
	};

	handleSignUpModalHide = () => {
		this.setState({
			signUpModalShow: false,
			signUpSetModalShow: false,
			name: '',
			bio: '',
			error: null,
		});
	};

	handleErrReset = () => {
		this.setState({ error: false });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`https://stream-champ-back.herokuapp.com/users/`, {
				name: this.state.name,
				bio: this.state.bio,
			})
			.then((res) => {
				console.log(res);
				this.handleSignUpModalShow();
			})
			.catch((err) => {
				this.setState({ error: true });
				console.log(err);
				this.handleSignUpModalShow();
			});
	};

	render() {
		return (
			<Container>
				<h1>Create an Account</h1>
				<Form type='submit'>
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

					<Button
						variant='outline-primary'
						type='submit'
						disabled={!this.state.name}
						onClick={this.handleSubmit}>
						Submit
					</Button>
				</Form>
				<SignUpModal
					name={this.state.name}
					show={this.state.signUpModalShow}
					error={this.state.error}
					handleErrReset={this.handleErrReset}
					onHide={this.handleSignUpModalHide}
				/>
			</Container>
		);
	}
}

export default SignUpPage;
