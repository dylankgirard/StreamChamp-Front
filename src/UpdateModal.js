import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UpdateModal(props) {
	const user = props.user.user;

	const handleSubmit = () => {
		axios
			.put(`https://stream-champ-back.herokuapp.com/users/${user.id}`, {
				id: user.id,
				name: props.name,
				bio: props.bio,
			})
			.then((res) => {
				props.setUser({
					user: {
						id: user.id,
						name: props.name,
						bio: props.bio,
						favorites: user.favorites,
					},
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Modal show={props.show} onHide={props.onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Update Your Profile</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='formBasicText'>
						<Form.Label>User Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Update Your User Name'
							onChange={props.handleNameChange}
						/>
					</Form.Group>
					<Form.Group controlId='formBasicText'>
						<Form.Label>Profile Bio</Form.Label>
						<Form.Control
							type='text'
							placeholder='Update Your Bio'
							onChange={props.handleBioChange}
						/>
					</Form.Group>
					{/* <Button variant='primary' type='submit' onClick={handleSubmit}>
						Submit
					</Button> */}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='outline-secondary'
					onClick={() => {
						props.onHide();
					}}>
					Close
				</Button>
				<Link to='/profile'>
					<Button
						variant='outline-warning'
						type='submit'
						onClick={() => {
							props.onHide();
							handleSubmit();
						}}>
						Update Profile
					</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	);
}

export default UpdateModal;
