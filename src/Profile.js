import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (!this.props.user.user) return null;
		const user = this.props.user.user;
		return (
			<Container>
				<h1>Your Profile</h1>
				<p>User Name: {user.name}</p>
				<p>Bio: {user.bio}</p>
				<p>Favorite Streams: {user.favorites.join(', ')}</p>
				<Button variant='outline-primary'>Update Profile</Button>
				<Button className='ml-2' variant='outline-danger'>Delete Profile</Button>
			</Container>
		);
	}
}

export default Profile;
