import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="not-found__text">
        The Page Not Found <span>😔</span>
      </h1>

      <Link to="/">
        <Button text="Home 😺" />
      </Link>
    </section>
  );
};

export default NotFound;
