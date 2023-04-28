import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const User = () => {
  return (
    <div>
      <p>
        You don't need authorization to use this application, although our
        programmers are working on it, so...
      </p>
      <Link to="/">
        <Button text="Home" />
      </Link>
    </div>
  );
};

export default User;
