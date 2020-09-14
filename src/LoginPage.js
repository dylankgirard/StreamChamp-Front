import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import axios from 'axios';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			isUser: false,
			loginModalShow: false,
			loginSetModalShow: false,
		};
	}

	handleLoginModalShow = () => {
		this.setState({ loginModalShow: true, loginSetModalShow: true });
	};

	handleLoginModalHide = () => {
		this.setState({
			loginModalShow: false,
			loginSetModalShow: false,
			isUser: false,
		});
	};

	handleOnChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(`https://stream-champ-back.herokuapp.com/users/`)
			.then((res) => {
				res.data.filter((user) => {
					if (user.name === this.state.name) {
						this.props.setUser({
							user: user,
						});
						this.setState({ isUser: true });
						this.handleLoginModalShow();
					} else {
						this.handleLoginModalShow();
					}
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<Container className='mt-2'>
				<h1>Login To Your Account</h1>
				<Form type='submit'>
					<Form.Group controlId='formBasicText'>
						<Form.Label>User Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Your User Name'
							onChange={this.handleOnChange}
						/>
					</Form.Group>
					<Button
						variant='outline-primary'
						type='submit'
						disabled={!this.state.name}
						onClick={this.handleSubmit}>
						Submit
					</Button>
				</Form>
				<LoginModal
					name={this.state.name}
					// user={this.props.user}
					isUser={this.state.isUser}
					show={this.state.loginModalShow}
					onHide={this.handleLoginModalHide}
				/>
			</Container>
		);
	}
}

export default LoginPage;
