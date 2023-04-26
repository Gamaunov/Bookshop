import React from 'react';
import cover from '../assets/img/book-not-found.jpg';

const Card = () => {

  return (
    <div className="card">
      <img className='card__img' src={cover} alt="book" />
      <div className='card__text'>
        <div className='card__author'>Author</div>
        <h2 className='card__title'>title</h2>
        <div className='card__rating'>rating</div>
        <p className='card__description'>description</p>
        <div className='card__price'>price=2=2</div>
        <button className='card__btn'>buy now</button>
      </div>
    </div>
  );
};

export default Card;
