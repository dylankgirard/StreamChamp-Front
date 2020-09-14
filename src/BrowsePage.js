import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, CardColumns } from 'react-bootstrap';
import './BrowsePage.css';
import axios from 'axios';
import FollowModal from './FollowModal';

class BrowsePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			followModalShow: false,
			followSetModalShow: false,
			user: this.props.user.user,
			streamerName: null,
			modalMessage: null,
		};
	}

	handleFollowModalShow = () => {
		this.setState({ followModalShow: true, followSetModalShow: true });
	};

	handleFollowModalHide = () => {
		this.setState({
			followModalShow: false,
			followSetModalShow: false,
		});
	};

	handleModalMessage = (modalMessage) => {
		this.setState({
			modalMessage: modalMessage,
		});
	};

	handlePutRequest = () => {
		const user = this.props.user.user;
		axios
			.put(`https://stream-champ-back.herokuapp.com/users/${user.id}`, {
				name: user.name,
				bio: user.bio,
				favorites: user.favorites,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		if (this.props.topStreams.length === 0) return null;
		if (!this.props.user) return null;
		const topStreams = this.props.topStreams;
		const user = this.props.user.user;
		// console.log(user);
		return (
			<Container className='mt-2'>
				<h1 className='mb-3'>Browse Top Live Streams</h1>
				<CardColumns>
					{topStreams.data.map((stream) => {
						return (
							<Card className='mb-4' id='card' key={stream.id}>
								<Card.Img
									id='image'
									variant='top'
									src={stream.thumbnail_url.replace('-{width}x{height}', '')}
								/>
								<Card.Body>
									<Card.Title id='browse-card-title'>{stream.user_name}</Card.Title>
									<Card.Text>{stream.title}</Card.Text>
									<Card.Text>
										Viewer Count:{' '}
										<span className='red-span'>{stream.viewer_count}</span>
									</Card.Text>
								</Card.Body>
								<Link style={{ textDecoration: 'none' }} to='/view'>
									<Button
										id='button'
										onClick={() => {
											this.props.setStreamName(stream.user_name);
										}}
										variant='outline-primary'
										block>
										Watch
									</Button>
								</Link>
								<Button
									id='button'
									variant='outline-warning'
									block
									onClick={() => {
										this.setState({ streamerName: stream.user_name });
										if (!user) {
											this.handleModalMessage('Login to follow this streamer!');
											this.handleFollowModalShow();
										} else if (user.favorites.includes(`${stream.user_name}`)) {
											this.setState({
												modalMessage: "You're already following this streamer!",
											});
											this.handleFollowModalShow();
										} else {
											user.favorites.push(stream.user_name);
											console.log(user);
											this.handlePutRequest();
											this.setState({
												modalMessage: `You followed ${stream.user_name}`,
											});
											this.handleFollowModalShow();
										}
									}}>
									Follow
								</Button>
							</Card>
						);
					})}
				</CardColumns>
				<FollowModal
					show={this.state.followModalShow}
					onHide={this.handleFollowModalHide}
					user={this.state.user}
					streamerName={this.state.streamerName}
					modalMessage={this.state.modalMessage}
				/>
			</Container>
		);
	}
}

export default BrowsePage;

{
	/* <Button
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
			this.handlePutRequest();
		}
	}}>
	Follow
</Button>; */
}
