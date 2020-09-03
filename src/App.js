import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import FrontPage from './FrontPage'
import ViewPage from './ViewPage'
import BrowsePage from './ViewPage'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

render() {
  return(
    <React.Fragment>
      <Header/>
      
    </React.Fragment>
  )
}

}

export default App;
