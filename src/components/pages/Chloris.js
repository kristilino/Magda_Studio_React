import React from 'react';
import '../../App.css';

export default function Chloris() {
  return (
    <div className='chloris'>
      <video autoPlay loop muted className='video-background'>
        <source src='/videos/video1.mp4' type='video/mp4' />
    
      </video>
      <h1>Chloris</h1>
    </div>
  );
}
