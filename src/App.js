import React, { Component, Fragment } from 'react';
// import { Route } from 'react-router-dom';

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
          <h1>This is where the content goes</h1>
        </main>
      </Fragment>
    );
  }
  
}

export default App;
