import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeleteModal(props) {
	const user = props.user.user;

	const handleSubmit = () => {
		axios.delete(`http://localhost:8000/users/${user.id}`).then((res) => {
            console.log(res);
            props.setUser({
                user: null
            })
		});
	};
	return (
		<Modal show={props.show} onHide={props.onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Delete This Profile?</Modal.Title>
			</Modal.Header>
			<Modal.Body>{user.name}</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={props.onHide}>
					Close
				</Button>
				<Link to='/'>
					<Button
						variant='danger'
						onClick={() => {
							props.onHide();
							handleSubmit();
						}}>
						Delete Profile
					</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteModal;
