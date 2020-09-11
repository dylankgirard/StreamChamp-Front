import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, CardColumns } from 'react-bootstrap';
import './BrowsePage.css';
import axios from 'axios';

function BrowsePage(props) {
	if (props.topStreams.length === 0) return null;
	if (!props.user) return null;

	const topStreams = props.topStreams;
	const user = props.user.user;

	console.log(user);

	const handlePutRequest = () => {
		axios
			.put(`http://localhost:8000/users/${user.id}`, {
				name: user.name,
				bio: user.bio,
				favorites: user.favorites,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				this.setState({ err: err });
			});
	};

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
									Viewer Count:{' '}
									<span className='red-span'>{stream.viewer_count}</span>
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
							<Button
								variant='outline-warning'
								block
								onClick={() => {
									if (!user) {
										console.log('Sign in to follow this stream');
									} else if (user.favorites.includes(`${stream.user_name}`)) {
										console.log('You already followed this stream!');
									} else {
										user.favorites.push(stream.user_name);
										console.log(user);
										handlePutRequest();
									}
								}}>
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
