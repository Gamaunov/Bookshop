import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const User = () => {
  return (
    <div className="user">
      <p className="user__text">
        You don't need Authorization to use this Application, although our
        programmers are working on it, so...
      </p>
      <Link to="/">
        <Button text="Home" />
      </Link>
    </div>
  );
};

export default User;
