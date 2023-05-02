import React from 'react';
import { Link } from 'react-router-dom';
import Gift from '../components/icons/Gift';

const Gifts = () => {
  return (
    <section className="gifts">
      <p className="gifts__text">
        Good news in honor of the opening of our store some books you can get as
        <b> a gift</b>
      </p>
      <Link to="/">
        <button className="btn">
          Go Back
          <span className="gifts__svg">
            <Gift />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default Gifts;
