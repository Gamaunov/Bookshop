import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className='cartEmpty'>
      <h1 className='cartEmpty__title'>
        Empty <span>😕</span>
      </h1>
      <Link to="/">
        <button className="btn">go back 😺</button>
      </Link>
    </div>
  );
};

export default CartEmpty;
