import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function LoginModal(props) {
    const name = props.name;
    const isUser = props.isUser;

	return (
		<Modal show={props.show} onHide={props.onHide}>
			<Modal.Header closeButton>
				{isUser ? <Modal.Title>Signed In As:</Modal.Title> : ''}
			</Modal.Header>
			<Modal.Body>
				<h1>{isUser ? name : 'No user user by that name exists.'}</h1>
			</Modal.Body>
			<Modal.Footer>
				{isUser ? '' : <p>Try another name!</p>}
				<Button variant='outline-primary' type='submit' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default LoginModal;
