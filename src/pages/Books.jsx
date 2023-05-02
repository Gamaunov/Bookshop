import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../utils/books';

const Books = () => {
  return (
    <section className="books">
      <h1 className="books__title">All You Need</h1>
      <div className="books__inner">
        {books.map((book, i) => (
          <div className="books__card">
            <img
              className="books__img"
              key={book.id}
              src={book.img}
              alt={book.title}
            />
            <h3 className="books__card-title"> {book.title} </h3>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="btn">Go Back 🧐</button>
      </Link>
    </section>
  );
};

export default Books;
