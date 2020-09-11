import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, CardColumns } from 'react-bootstrap';
import './BrowsePage.css'

function BrowsePage(props) {
	const topStreams = props.topStreams;
	if (topStreams.length === 0) {
		return null;
	}
	// console.log(topStreams);
	return (
		<Container>
			<h1>Browse Top Streams</h1>
			<CardColumns>
				{topStreams.data.map((stream) => {
					return (
						<Card border='secondary' className='mb-4' key={stream.id}>
							<Card.Img
								variant='top'
								src={stream.thumbnail_url.replace('-{width}x{height}', '')}
							/>
							<Card.Body>
								<Card.Title>{stream.user_name}</Card.Title>
								<Card.Text>{stream.title}</Card.Text>
								<Card.Text>
									Viewer Count: <span className='red-span'>{stream.viewer_count}</span>
								</Card.Text>
							</Card.Body>
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
			</CardColumns>
		</Container>
	);
}

export default BrowsePage;
