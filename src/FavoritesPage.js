import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import './FavoritesPage.css';

class FavoritesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favStreams: [],
		};
	}

	componentDidMount() {
		if (!this.props.user.user) return;
		const favs = this.props.user.user.favorites;
		for (let i = 0; i < favs.length; i++) {
			axios
				.get(
					`https://api.twitch.tv/helix/search/channels?query=${this.props.user.user.favorites[i]}`,
					{
						headers: {
							'Client-Id': process.env.REACT_APP_TWITCH_API_CLIENT_ID,
							Authorization: `Bearer ${process.env.REACT_APP_TWITCH_API_APP_TOKEN}`,
						},
					}
				)
				.then((res) => {
					this.setState({
						favStreams: [...this.state.favStreams, res.data.data[0]],
					});
				})
				.catch((err) => {
					this.setState({ err: err });
				});
		}
	}

	render() {

		return (
			<Container className='mt-2'>
				<h1 className='mb-3'>Browse Favorite Streams</h1>
				{this.state.favStreams.length === 0 ? (
					<Container>
						<h3>You're Not Following Anyone!</h3>
						<Link style={{ textDecoration: 'none' }} to='/browse'>
							<Button variant='outline-primary' block>
								Go To Browse Page
							</Button>
						</Link>
					</Container>
				) : (
					''
				)}
				<CardColumns>
					{this.state.favStreams.map((stream) => {
						return (
							<Card
								id='card'
								border='secondary'
								className='mb-4'
								key={stream.id}>
								<Card.Img
									id='image'
									variant='top'
									src={stream.thumbnail_url.replace('-{width}x{height}', '')}
								/>
								<Card.Body>
									<Card.Title id='card-title'>{stream.display_name}</Card.Title>
									{stream.is_live ? (
										<Card.Text>
											<span className='red-span'>LIVE</span>
										</Card.Text>
									) : (
										''
									)}
								</Card.Body>
								<Link style={{ textDecoration: 'none' }} to='/view'>
									<Button
										id='button'
										onClick={() => {
											this.props.setStreamName(stream.display_name);
										}}
										variant='outline-primary'
										block>
										Watch
									</Button>
								</Link>
							</Card>
						);
					})}
				</CardColumns>
			</Container>
		);
	}
}

export default FavoritesPage;
