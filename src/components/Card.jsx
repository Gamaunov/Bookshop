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
  const currencyCodeType =
    currencyCode === 'RUB' ? '₽' : currencyCode === 'USD' ? '$' : currencyCode;

  return (
    <div className="card">
      <img className="card__img" src={img ? img : cover} alt="book" />
      <div className="card__text">
        <div className="card__author">{author}</div>
        <div className="card__title">{title}</div>
        <div className="card__rating">
          {stars > 0.4 && reviews > 0 && (
            <Star stars={stars} reviews={reviews} />
          )}
        </div>
        <p className="card__description">{description}</p>
        <div className="card__price">
          {currencyCodeType}
          {price}
        </div>
        <Button text="buy now" />
      </div>
    </div>
  );
};

export default Card;
