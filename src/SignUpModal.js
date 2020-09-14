import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SignUpModal(props) {
	const name = props.name;
	const error = props.error;

	return (
		<Modal show={props.show} onHide={props.onHide}>
			<Modal.Header closeButton>
				{!error ? <Modal.Title>Thanks For Signing Up!</Modal.Title> : ''}
			</Modal.Header>
			<Modal.Body>
				<h1>{!error ? name : 'That name is taken, try again.'}</h1>
			</Modal.Body>
			<Modal.Footer>
				{!error ? <p>Try Logging In!</p> : ''}
				<Button variant='outline-primary' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SignUpModal;
