import React from 'react';
import '../../App.css';
import SignupForm from '../SignupForm';

export default function Signup() {
  return (
    <div className='signup'>
        <SignupForm />
      <video autoPlay loop muted className='video-background'>
        <source src='/videos/video6.mp4' type='video/mp4' />
      </video>
     

    </div>
  );
}

