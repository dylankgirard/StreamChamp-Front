import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUpModal(props) {
	const name = props.name;

	return (
		<Modal show={props.show} onHide={props.onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Thanks For Signing Up!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h1>{name}</h1>
			</Modal.Body>
			<Modal.Footer>
				<p>Try Logging In!</p>
				<Button variant='outline-primary' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SignUpModal;
