import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function FollowModal(props) {
	const name = props.name;
	const user = props.user;
	const streamerName = props.streamerName;

	return (
		<Modal show={props.show} onHide={props.onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Streamer: {streamerName}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h1>{props.modalMessage}</h1>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-primary' type='submit' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default FollowModal;
