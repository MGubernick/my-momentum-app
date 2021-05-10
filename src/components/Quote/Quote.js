import React, { Component } from 'react';
import axios from 'axios';

// import quickQuote from './../../api/quote.js';

// TO BE FIXED!
// const md = 'getQuote';
// const key = 4576523;
// const format = 'json';
// const lang = 'en';
// const config = {
//   apiUrl: `https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en`
// };

// For Tech Quote
const config = {
  apiUrl: 'http://quotes.stormconsultancy.co.uk/random.json'
};

class RandoQuote extends Component { 
  constructor (props) {
    super(props)

    this.state = {
      quote: '',
      quoteAuthor: ''
    };
  };

  componentDidMount () {
    // hit the unsplash API
    axios.get(`${config.apiUrl}`)
      .then(res => this.setState({ quote: res.data.quote, quoteAuthor: res.data.author }))
      .catch(error => {
        console.error('oops: ', error.message);
      })
  };

  render () {
    const { quote, quoteAuthor } = this.state
    return (
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
        <h5 style={{ justifyContent: 'center' }}>{quote}</h5>
        <p><small>- {quoteAuthor}</small> </p>
      </div>
    );
  };
};

export default RandoQuote;
