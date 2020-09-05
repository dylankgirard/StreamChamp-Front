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
				<CardGroup>
					<Card>
						<Card.Img
							variant='top'
							src={topStreams.data[0].thumbnail_url.replace(
								'-{width}x{height}', ''
							)}
						/>
						<Card.Body>
							<Card.Title>{topStreams.data[0].user_name}</Card.Title>
							<Card.Text>{topStreams.data[0].title}}</Card.Text>
						</Card.Body>
						<Button>Watch</Button>
					</Card>
				</CardGroup>
			</Container>
		</Container>
	);
}

export default BrowsePage;
