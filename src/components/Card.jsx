import React from 'react';
import cover from '../assets/img/book-not-found.jpg';
import Button from './Button';
import Star from './Star';

const Card = ({
  img,
  author,
  title,
  description,
  price,
  currencyCode,
  stars,
  reviews,
}) => {
  return (
    <div className="card">
      <img className="card__img" src={img ? img : cover} alt="book" />
      <div className="card__text">
        <div className="card__author">{author}</div>
        <h2 className="card__title">{title}</h2>
        <div className="card__rating">
          {stars > 0.4 && reviews > 0 && (
            <Star stars={stars} reviews={reviews} />
          )}
        </div>
        <p className="card__description">{description}</p>
        <div className="card__price">
          {currencyCode} {price}
        </div>
        <Button text="buy now" />
      </div>
    </div>
  );
};

export default Card;
