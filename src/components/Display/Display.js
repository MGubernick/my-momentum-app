import React, { Component } from 'react';
// import axios from 'axios';
// import components:
import Clock from './../Clock/Clock.js';
// import Layout from './../Layout/Layout.js';
import Quote from './../Quote/Quote.js';
import Weather from './../Weather/Weather.js';

class LandingDisplay extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imageUrl: '',
      description: ''
    };
  };

  render () {
    return (
       <div className='display-post' style={{ fontSize: '30px' }}>
          <div className='display-component-weather' style={{ fontSize: '15px' }}>
            <Weather />
          </div>
          <div className='display-component-clock' style={{ marginTop: '150px' }}>
            <Clock />
          </div>
          <div className='display-component-quote' style={{ marginTop: '180px' }}>
            <Quote />
          </div>
        </div>
    );
  };
};

export default LandingDisplay;
