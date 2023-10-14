import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainPage from '../MainPage';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <MainPage />
        <Cards />
      <Footer />
    </>
  );
}

export default Home;

