import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, ButtonGroup } from 'react-bootstrap';

function BrowsePage(props) {
	const topStreams = props.topStreams;
	if (topStreams.length === 0) {
		return null;
	}
	// console.log(topStreams);
	return (
		<Container>
			<h2>Browse</h2>
			<Container fluid='md' className='row m-0'>
				{topStreams.data.map((stream) => {
					return (
						<Card
							style={{ width: '50%' }}
							border='secondary'
							className='mb-2 mt-2'
							key={stream.id}>
							<Card.Img
								variant='top'
								src={stream.thumbnail_url.replace('-{width}x{height}', '')}
							/>
							<Card.Body>
								<Card.Title>{stream.user_name}</Card.Title>
								<Card.Text>{stream.title}}</Card.Text>
								<Card.Text>Viewer Count: {stream.viewer_count}</Card.Text>
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
			</Container>
		</Container>
	);
}

export default BrowsePage;
