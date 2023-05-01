import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div>
      <h2>
        Empty <span>😕</span>
      </h2>
      <Link to="/">
        <button className="btn">go back 😺</button>
      </Link>
    </div>
  );
};

export default CartEmpty;
