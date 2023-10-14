import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainPage.css';

function MainPage() {
  return (
    <div className='main-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>PASSION LED US HERE</h1>
      <p>Unlock the potential of your living spaces with our architectural expertise.</p>
      <div className='main-btns'>
        
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> About Us</Button>
    
      </div>
    </div>
  );
}

export default MainPage;
