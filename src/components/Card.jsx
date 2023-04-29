import React from 'react';
import cover from '../assets/img/book-not-found.jpg';
import Button from './Button';
import Star from './Star';

const Card = ({ book }) => {
  const img = book.volumeInfo.imageLinks?.thumbnail;
  const author = [book.volumeInfo.authors];
  const title = book.volumeInfo.title;
  const description = book.volumeInfo.description?.slice(0, 94).concat('...');
  const price = book.saleInfo?.retailPrice?.amount;
  const currencyCode = book.saleInfo?.retailPrice?.currencyCode;
  const stars = book.volumeInfo?.averageRating;
  const reviews = book.volumeInfo?.ratingsCount;

  const currencyCodeType =
    currencyCode !== undefined && currencyCode === 'RUB'
      ? '₽'
      : currencyCode === 'USD'
      ? '$'
      : currencyCode;

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
