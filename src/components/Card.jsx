import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cover from '../assets/img/book-not-found.jpg';
import { addItem, removeItem } from '../redux/cartSlice/cartSlice';
import { isThisNumber } from '../utils/isNumber';
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
  const id = book.id;
  const thisPrice = isThisNumber(price) ? price : 0;
  const currencyCodeType =
    currencyCode !== undefined && currencyCode === 'RUB'
      ? '₽'
      : currencyCode === 'USD'
      ? '$'
      : currencyCode;

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  console.log(items?.item?.id, '432');

  const onClickAdd = () => {
    const item = {
      id,
      title,
      thisPrice,
      img,
      currencyCodeType,
    };
    dispatch(addItem(item));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

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
        {!items.some((product) => product.id === id) ? (
          <button onClick={onClickAdd} className="btn">
            buy now
          </button>
        ) : (
          <button onClick={onClickRemove} className="btn">
            in the cart
          </button>
        )}
        {/* {!items.id === id ? (
          
          <button onClick={onClickRemove} className='btn'>------</button>
          ):(
          <button onClick={onClickAdd} className='btn'>buy now</button>

        )} */}
      </div>
    </div>
  );
};

export default Card;
