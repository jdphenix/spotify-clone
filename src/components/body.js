import React from 'react';
import '../styles/body.scss';

const Body = () => {
    return(
    <div className='body'>
      <div className='body-container'>
        <h1 className='body-title'>Another</h1>
        <h1 className='body-title'>Spotify</h1>
        <p>Millions of songs and podcasts. Partially accessible.</p>
        <button className='body-button'>Log In Here</button>
      </div>
    </div>
    )
}

export default Body;