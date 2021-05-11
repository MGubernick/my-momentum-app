// import React, { Component } from 'react';
// import axios from 'axios';

// const num = 'S3sZRiZ7S5jo0vjtpoabAM8IjTbcK4nnEdjQ4VHT3zM';
// const config = {
//   apiUrl: `https://api.unsplash.com/photos/random?client_id=${num}`
// };

// class ImageLayout extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       imageUrl: '',
//       description: ''
//     };
//   };

//   componentDidMount () {
//     // hit the unsplash API
//     axios.get(`${config.apiUrl}`)
//       // .then(res => console.log('this is res', res))
//       .then(res => this.setState({ imageUrl: res.data.urls.full, description: res.data.alt_description }))
//       .catch(error => {
//         console.error('oops: ', error.message)
//       })
//   };

//   render () {
//     // const { imageUrl, description } = this.state
//     const { imageUrl } = this.state
//     console.log('this is imageUrl', imageUrl)
//     return(
//       <div style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', width: '100vw' }} >
//         {/* <h3 style={{ alignItems: 'center', color: '#fff', display: 'flex', justifyContent: 'center' }} >{description}</h3> */}
//       </div>
//     );
//   };
// };

// export default ImageLayout;
