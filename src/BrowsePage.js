import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Card, CardGroup, Button } from 'react-bootstrap';

function BrowsePage(props) {
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
						<Card border='dark' className='mb-3' key={stream.id}>
							<Card.Img
								variant='top'
								src={stream.thumbnail_url.replace('-{width}x{height}', '')}
							/>
							<Card.Body>
								<Card.Title>{stream.user_name}</Card.Title>
								<Card.Text>{stream.title}}</Card.Text>
								<Card.Text>Viewer Count: {stream.viewer_count}</Card.Text>
							</Card.Body>
							<Button>Watch</Button>
						</Card>
					);
				})}
			</Container>
		</Container>
	);
}

export default BrowsePage;
