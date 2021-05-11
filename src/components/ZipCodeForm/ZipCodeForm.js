import React from 'react';
import Button from 'react-bootstrap/Button';

const ZipCodeForm = ({ zipCode, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row' }}>
    <h5>Check The Weather!:&nbsp;&nbsp; </h5>
    <input
      required
      style={{ border: '1px solid  #000', opacity: '.5', textShadow: '.5px .5px #28d3ee' }}
      placeholder='Enter Zipcode Here'
      name='zipCode'
      value={zipCode}
      onChange={handleChange}
      />
      <Button variant="outline-secondary" style={{ color: '#28d3ee', textShadow: '1px 1px #000'  }} type='submit'>Let's Take A Look!</Button>
  </form>
);

export default ZipCodeForm;
