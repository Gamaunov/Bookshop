import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, minusItem } from '../redux/cartSlice/cartSlice';
import Gift from './icons/Gift';
import Minus from './icons/Minus';
import Plus from './icons/Plus';
import Remove from './icons/Remove';
import RemoveItem from './icons/RemoveItem';

const CartItem = ({ id, title, thisPrice, count, img, currencyCodeType }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  const itemCount = (thisPrice * count).toFixed(2)
  return (
    <div className='cartItem'>
      <img className='cartItem__img' src={img} alt="book" />
      <h3 className='cartItem__title'>{title}</h3>
      <div className='cartItem__btns'>
        <button className='cartItem__btn' disabled={count === 1} onClick={onClickMinus}>
          <Minus />
        </button>
        <b>{count}</b>
        <button className='cartItem__btn' onClick={onClickPlus}>
          <Plus />
        </button>
      </div>
      <div className='cartItem__count'>
        {thisPrice * count === 0 ? (
         <div className='cartItem__gift' title='you allowed to take only one gift'>
           <p>It`s a gift</p> <Gift />
         </div>
        ) : (
          <b>
            {itemCount} {currencyCodeType}
          </b>
        )}
      </div>
      <button className='cartItem__btn cartItem__remove' onClick={onClickRemove}>
        <RemoveItem />
      </button>
    </div>
  );
};

export default CartItem;
