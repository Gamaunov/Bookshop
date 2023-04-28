import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <>
      <h1>
        The Page Not Found <span>😔</span>
      </h1>

      <Link to="/">
        <Button text="Home 😺" />
      </Link>
    </>
  );
};

export default NotFound;
