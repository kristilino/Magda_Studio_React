import React from 'react';
import '../../App.css';

export default function aphrodite() {
  return (
    <div className='aphrodite'>
      <video autoPlay loop muted className='video-background'>
        <source src='/videos/video2.mp4' type='video/mp4' />

      </video>
      <h1>Aphrodite</h1>
    </div>
  );
}



