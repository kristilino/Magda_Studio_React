import React from 'react';
import '../../App.css';

export default function Apollon() {
  return (
    <div className='apollon'>
      <video autoPlay loop muted className='video-background'>
        <source src='/videos/video3.mp4' type='video/mp4' />
     
      </video>
      <h1>Apollon</h1>
    </div>
  );
}
