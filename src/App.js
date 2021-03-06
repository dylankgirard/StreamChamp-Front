import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import FrontPage from './FrontPage';
import ViewPage from './ViewPage'
import BrowsePage from './BrowsePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import FavoritesPage from './FavoritesPage';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			topStreams: [],
			streamName: 'lirik',
			user: {}
		};
	}

	componentDidMount() {
		axios
			.get('https://api.twitch.tv/helix/streams?first=50', {
				headers: {
					'Client-Id': process.env.REACT_APP_TWITCH_API_CLIENT_ID,
					Authorization: `Bearer ${process.env.REACT_APP_TWITCH_API_APP_TOKEN}`,
				},
			})
			.then((res) => {
				this.setState({
					topStreams: res.data,
				});
			});
	}

	setStreamName = (streamName) => {
		this.setState({ streamName: streamName})
	}

	setUser = (user) => {
		this.setState({ user: user})
	}

	render() {
		return (
			<React.Fragment>
				<Header user={this.state.user} setUser={this.setUser}/>
				<Route
					exact
					path='/'
					render={() => {
						return <FrontPage topStreams={this.state.topStreams} />;
					}}
				/>
				<Route
					path='/browse'
					render={() => {
						return (
							<BrowsePage
								user={this.state.user}
								topStreams={this.state.topStreams}
								setStreamName={this.setStreamName}
								setUser={this.setUser}
							/>
						);
					}}
				/>
				<Route
					path='/login'
					render={() => {
						return <LoginPage setUser={this.setUser} />;
					}}
				/>
				<Route
					path='/signup'
					render={() => {
						return <SignUpPage />;
					}}
				/>
				<Route
					path='/view'
					render={() => {
						return <ViewPage streamName={this.state.streamName} />;
					}}
				/>
				<Route
					path='/favorites'
					render={() => {
						return (
							<FavoritesPage
								user={this.state.user}
								setStreamName={this.setStreamName}
							/>
						);
					}}
				/>
				<Route
					path='/profile'
					render={() => {
						return <Profile user={this.state.user} setUser={this.setUser} />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default App;
