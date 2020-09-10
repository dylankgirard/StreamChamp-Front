import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import FrontPage from './FrontPage';
import ViewPage from './ViewPage'
import BrowsePage from './BrowsePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			topStreams: [],
			streamName: 'lirik'
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
				console.log(res.data);
			});
	}

	setStreamName = (streamName) => {
		this.setState({ streamName: streamName})
	}

	render() {
		return (
			<React.Fragment>
				<Header />
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
								topStreams={this.state.topStreams}
								setStreamName={this.setStreamName}
							/>
						);
					}}
				/>
				<Route
					path='/login'
					render={() => {
						return <LoginPage />;
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
			</React.Fragment>
		);
	}
}

export default App;
