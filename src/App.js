import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import FrontPage from './FrontPage'
// import ViewPage from './ViewPage'
import BrowsePage from './BrowsePage'
import SearchPage from './SearchPage'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

render() {
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
		S/>
		</React.Fragment>
	);
}

}

export default App;
