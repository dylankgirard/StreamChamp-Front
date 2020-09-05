import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, ButtonGroup } from 'react-bootstrap';

function BrowsePage(props) {
	// const linkClick = (e) => {
	// 	e.preventDefault();
	// 	window.location.href = '/view';
	// }

	// function parentUserName(e){
	// 	let name = e.currentTarget.parentElement.getAttribute('user_name');
	// 	console.log(name);
	// }

	const topStreams = props.topStreams;
	if (topStreams.length === 0) {
		return null;
	}
	console.log(topStreams);
	return (
		<Container>
			<h2>Browse</h2>
			<Container>
				{topStreams.data.map((stream) => {
					return (
						<Card border='secondary' className='mb-4' key={stream.id}>
							<Card.Img
								variant='top'
								src={stream.thumbnail_url.replace('-{width}x{height}', '')}
							/>
							<Card.Body>
								<Card.Title>{stream.user_name}</Card.Title>
								<Card.Text>{stream.title}}</Card.Text>
								<Card.Text>Viewer Count: {stream.viewer_count}</Card.Text>
							</Card.Body>
							{/* <style type='text/css'>
								{`.btn-flat 
								{background-color: #6441A4;
								color: white;}`}
							</style> */}

							<Link style={{ textDecoration: 'none' }} to='/view'>
								<Button
									onClick={() => {
										props.setStreamName(stream.user_name);
									}}
									variant='outline-primary'
									block>
									Watch
								</Button>
							</Link>
							<Button variant='outline-warning' block>
								Follow
							</Button>
						</Card>
					);
				})}
			</Container>
		</Container>
	);
}

export default BrowsePage;
