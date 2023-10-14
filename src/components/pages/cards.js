import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Revered Creations: Unveiling Our Top 6 Architectural Masterpieces</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <p className="sold_out">Sold out</p>
            <CardItem
              src='images/hera.jpg'
              text='Hera mixed-use tower: Albania’s tallest building'
              label='Hera Sold Out'
              path='/'
            />
           
              <CardItem
              src='images/green.jpg'
              text='Chloris Eco-Residences: A Haven for Green Living and Sustainable Ecosystems'
              label='Chloris'
              path='/chloris'
            />

            
            <CardItem
              src='images/ares.jpeg'
              text='Exquisite Luxury: Our Palace of Distinction.'
              label='Ares'
              path='/ares'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/aura.jpg'
              text="Aura Villa: Where Elegance Meets Serenity."
              label='Aura'
              path='/aura'
            />
            <CardItem
              src='images/aphrodite.jpg'
              text='Aphrodite House: Where Beauty Finds a Home.'
              label='Aphrodite'
              path='/aphrodite'
            />
            
            <CardItem
              src='images/apollo.jpeg'
              text='Apollon Building: A Beacon of Contemporary Design and Innovation'
              label='Apollon'
              path='/apollon'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
