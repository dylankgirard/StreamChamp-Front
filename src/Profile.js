import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import DeleteModal from './DeleteModal';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			setModalShow: false,
		};
	}

	handleShowModal = () => {
		this.setState({ modalShow: true, setModalShow: true });
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
				<Button className='ml-2' variant='outline-danger' onClick={this.handleShowModal}>
					Delete Profile
				</Button>
				<DeleteModal
					user={this.props.user}
					setUser={this.props.setUser}
					show={this.state.modalShow}
					onHide={() =>
						this.setState({ setModalShow: false, modalShow: false })
					}
				/>
			</Container>
		);
	}
}

export default Profile;
