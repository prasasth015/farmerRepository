import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Some Interesting fatcts of farming system!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mixedfarmm.jpg'
              text='Fresh Spring small fresh green Wheat Field Banner'
              label='Mixed Farm'
              path='/services'
            />
            <CardItem
              src='images/commercial.jpg'
              text='Grren wheat field during blue sky during daytime'
              label='Commercial'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/plant.jpg'
              text='Beautiful Scenery in Farm Stock Footage'
              label='Plantation Farming'              
              path="/services"
            />
            <CardItem
              src='images/purchase10.jpg'
              text='Production area has been stabled, But production has been intensified'
              label='nature'
              path='/products'
            />
            <CardItem
              src='images/shifting.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Shifting'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
