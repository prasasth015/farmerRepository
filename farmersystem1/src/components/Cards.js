import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Farmer Pictures!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/purchase1.jpg'
              text='Fresh Spring small fresh green Wheat Field Banner'
              label='Spring'
              path='/services'
            />
            <CardItem
              src='images/purchase6.jpg'
              text='Grren wheat field during blue sky during daytime'
              label='Agriculture'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/purchase7.jpg'
              text='Beautiful Scenery in Farm Stock Footage'
              label='Farmland'
              path='/services'
            />
            <CardItem
              src='images/purchase10.jpg'
              text='Production area has been stabled, But production has been intensified'
              label='nature'
              path='/products'
            />
            <CardItem
              src='images/purchase.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
