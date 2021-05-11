// import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// import components that need routes
import Weather from './components/Weather/Weather.js';
import BackgroundImage from './components/Layout/Layout.js';
import RandoQuote from './components/Quote/Quote.js';
import Clock from './components/Clock/Clock.js';
import Display from './components/Display/Display.js';

// background call 
const num = 'S3sZRiZ7S5jo0vjtpoabAM8IjTbcK4nnEdjQ4VHT3zM';
const config = {
  apiUrl: `https://api.unsplash.com/photos/random?client_id=${num}`
};

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      imageUrl: '',
      description: ''
    };
  };

  componentDidMount () {
    // hit the unsplash API
    axios.get(`${config.apiUrl}`)
      // .then(res => console.log('this is res', res))
      .then(res => this.setState({ imageUrl: res.data.urls.full, description: res.data.alt_description }))
      .catch(error => {
        console.error('oops: ', error.message)
      });
  };

  render () {
    const { imageUrl } = this.state
    return (
      <div style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '120vh', width: '100vw' }}>
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
          <Route exact path='/' render={() => (
            <Display />
          )} />
        </main>
      </div>
    );
  };
  
};

export default App;
