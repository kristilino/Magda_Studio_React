import React from 'react';
import '../../App.css';

export default function Aura() {
  return (
    <div className='aura'>
      <video autoPlay loop muted className='video-background'>
        <source src='/videos/video4.mp4' type='video/mp4' />
     
      </video>
      <h1>Aura</h1>
    </div>
  );
}
