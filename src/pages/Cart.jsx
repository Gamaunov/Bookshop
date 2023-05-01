import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartEmpty from '../components/CartEmpty';
import CartItem from '../components/CartItem';
import Remove from '../components/icons/Remove';
import { clearItems } from '../redux/cartSlice/cartSlice';

const Cart = () => {
  const dispath = useDispatch();

  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    dispath(clearItems());
  };

  if (!totalCount) {
    return <CartEmpty />;
  }

  return (
    <section className="cart">
      <div className="cart__inner">
        <div onClick={onClickClear} className="cart__remove">
          <span>Clear</span>
          <Remove />
        </div>
        <div className="cart__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__total">
          <span className="cart__total-count">
            Total: <b>{totalCount} pcs.</b>
          </span>
          <span className="cart__total-price">
            Total: <b>{totalPrice.toFixed(2)} ₽</b>
          </span>
        </div>
        <div className="cart__btns">
          <Link to="/">
            <button className="btn">Go Back</button>
          </Link>
          <div>
            <button className="btn">buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
