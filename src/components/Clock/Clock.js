// import moment from 'moment';
import React, { Component } from 'react';
import { DateTime } from 'luxon';
// import moment from 'moment';

class Clock extends Component {
  constructor (props) {
    super(props)

    const dt = DateTime.now()
    this.state = {
      date: dt.toFormat('LLL dd, yyyy'),
      time: dt.toFormat('t')
    }

    // this.state = {
    //   date: moment().format('ll'),
    //   time: moment().format('LT')
    // };
  };
  render () {
    const { date, time } = this.state
    return (
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h5>{date}</h5>
        <h5>{time}</h5>
      </div>
    )
  };
};

export default Clock;
