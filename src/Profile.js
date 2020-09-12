import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			bio: '',
			updateModalShow: false,
			updateSetModalShow: false,
			deleteModalShow: false,
			deleteSetModalShow: false,
		};
	}

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleBioChange = (e) => {
		this.setState({ bio: e.target.value });
	};

	handleUpdateShowModal = () => {
		this.setState({ updateModalShow: true, updateSetModalShow: true });
	};

	handleDeleteShowModal = () => {
		this.setState({ deleteModalShow: true, deleteSetModalShow: true });
	};

	render() {
		if (!this.props.user.user) return null;
		const user = this.props.user.user;
		return (
			<Container>
				<h1>Your Profile</h1>
				<p>User Name: {user.name}</p>
				<p>Bio: {user.bio}</p>
				<p>Favorite Streams: {user.favorites.join(', ')}</p>
				<Button variant='outline-primary' onClick={this.handleUpdateShowModal}>
					Update Profile
				</Button>
				<UpdateModal
					user={this.props.user}
					name={this.state.name}
					bio={this.state.bio}
					setUser={this.props.setUser}
					handleNameChange={this.handleNameChange}
					handleBioChange={this.handleBioChange}
					show={this.state.updateModalShow}
					onHide={() =>
						this.setState({ updateSetModalShow: false, updateModalShow: false })
					}
				/>
				<Button
					className='ml-2'
					variant='outline-danger'
					onClick={this.handleDeleteShowModal}>
					Delete Profile
				</Button>
				<DeleteModal
					user={this.props.user}
					setUser={this.props.setUser}
					show={this.state.deleteModalShow}
					onHide={() =>
						this.setState({ deleteSetModalShow: false, deleteModalShow: false })
					}
				/>
			</Container>
		);
	}
}

export default Profile;
