import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { topBooks } from '../utils/topBooks';

const TopBooks = () => {
  return (
    <section className="top-books">
      <ol className="top-books__list">
        {topBooks.map((book, i) => (
          <li key={book} top-books__item>
            <span className='top-books__item--i'>{i+1}</span> {book}
          </li>
        ))}
      </ol>
      <Link to="/">
        <Button text="Home" />
      </Link>
    </section>
  );
};

export default TopBooks;
