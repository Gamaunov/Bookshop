import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ChangeBook = () => {
  return (
    <div className='change-book'>
      <p className='change-book__text'>
        Our team is still thinking about how to set up a book exchange. If you
        have suggestions you can email our engineer.
        <strong>You can also invite him to join your team!!! </strong>That would
        be great.
      </p>
      <Link to="/">
        <Button text="Home" />
      </Link>
    </div>
  );
};

export default ChangeBook;
