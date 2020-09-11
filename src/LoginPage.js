import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

	handleOnChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios.get(`http://localhost:8000/users/`).then((res) => {
			res.data.filter((user) => {
				if (user.name === this.state.name) {
					this.props.setUser({
						user: user,
					});
				}
				// console.log(res.data);
			});
		});
	};

	render() {
		return (
			<Container>
				<h1>Login To Your Account</h1>
				<Form>
					<Form.Group controlId='formBasicText'>
						<Form.Label>User Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Your User Name'
							onChange={this.handleOnChange}
						/>
					</Form.Group>
					{/* <Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
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

export default LoginPage;

// this.props.setUser({
				// 	user: res.data.filter((user) => {
				// 		if (user.name === this.state.name){
				// 		console.log(user);
				// 		return user
				// 		} else {
				// 			console.log('No user by that name');
				// 			return null
				// 		}
				// 	}),
				// });
				// console.log(res.data);