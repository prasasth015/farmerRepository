import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Some Interesting Fatcts Of Farmer System!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mixedfarmm.jpg'
              text='Fresh Spring small fresh green Wheat Field Banner'
              label='Mixed Farm'              
              to="https://www.britannica.com/topic/shifting-agriculture"
              path="/services"
            />
            <CardItem
              src='images/image7.jpg'
              text='Grren wheat field during blue sky during daytime'
              label='Commercial'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image8.jpg'
              text='Beautiful Scenery in Farm Stock Footage'
              label='Plantation Farming'              
              path="/sign-up"
            />
            <CardItem
              src='images/pic3.jpg'
              text='Production area has been stabled, But production has been intensified'
              label='Organic'
              path='/organics'
            />
            <CardItem
              src='images/image6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Shifting'
              path='/shiftings'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
