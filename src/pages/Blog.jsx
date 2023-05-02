import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Blog = () => {
  const [text, count] = useTypewriter({
    words: ['Programming', 'React'],
    loop: false,
    delaySpeed: 3000,
  });

  return (
    <section className="blog">
      <div className="blog__title">
        All about:{' '}
        <span className="blog__title--action">
          {text}
          <Cursor cursorColor="#4c3db2" />
        </span>
      </div>
      <p className="blog__text">
        Our team is still thinking about what to blog about
      </p>
      <Link to="/">
        <button className="btn">Go Back 🧐</button>
      </Link>
    </section>
  );
};

export default Blog;
