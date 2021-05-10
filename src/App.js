import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// import components that need routes
import Weather from './components/Weather/Weather.js';
import BackgroundImage from './components/Layout/Layout.js';
import RandoQuote from './components/Quote/Quote.js';
import Clock from './components/Clock/Clock.js';
import Display from './components/Display/Display.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    };
  }
  render () {
    return (
      <Fragment>
        <main>
          <Route path='/weather' render={() => (
            <Weather />
          )} />
          <Route path='/layout' render={() => (
            <BackgroundImage />
          )} />
          <Route path='/quote' render={() => (
            <RandoQuote />
          )} />
          <Route path='/clock' render={() => (
            <Clock />
          )} />
          <Route path='/display' render={() => (
            <Display />
          )} />
        </main>
      </Fragment>
    );
  }
  
}

export default App;
