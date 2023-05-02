import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const TopBooks = () => {
  const topBooks = useSelector((state) => state.topBook.topBook);

  return (
    <section className="top-books">
      <h1 className="top-books__title">Top 100 Books 2022</h1>
      <ul className="top-books__list">
        {topBooks?.map((book, i) => (
          <li key={book} className="top-books__item">
            <span className="top-books__item--i">{i + 1}</span> {book}
          </li>
        ))}
      </ul>
      <Link to="/">
        <Button text="Home" />
      </Link>
    </section>
  );
};

export default TopBooks;
