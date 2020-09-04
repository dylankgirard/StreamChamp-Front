import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import FrontPage from './FrontPage';
// import ViewPage from './ViewPage'
import BrowsePage from './BrowsePage';
import SearchPage from './SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			topStreams: [],
		};
	}

	componentDidMount() {
		axios
			.get('https://api.twitch.tv/helix/streams?first=10', {
				headers: {
					'Client-Id': process.env.REACT_APP_TWITCH_API_CLIENT_ID,
					'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_API_APP_TOKEN}`,
				},
			})
			.then((res) => {
				this.setState({
					topStreams: res.data,
				});
			});
	}

	render() {
		console.log(this.state.topStreams);
		return (
			<React.Fragment>
				<Header />
				<Route exact path='/home' component={FrontPage} />
				<Route
					path='/browse'
					render={() => {
						return <BrowsePage />;
					}}
				/>
				<Route
					path='/search'
					render={() => {
						return <SearchPage />;
					}}
					S
				/>
			</React.Fragment>
		);
	}
}

export default App;
