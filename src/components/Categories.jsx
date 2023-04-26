import axios from 'axios';
import React from 'react';

const Categories = () => {
  const API_KEY = process.env.REACT_APP_KEY;

  const searchBook = () => {
    axios.get(`https://www.googleapis.com/books/v1/users/1112223334445556677/
    bookshelves/3/volumes?key=${API_KEY}`);
  };
  return (
    <aside>
      <ul>
        <li>Architecture</li>
        <li>Art & Fashion</li>
        <li>Biography</li>
        <li>Business</li>
        <li>Crafts & Hobbies</li>
        <li>Drama</li>
        <li>Fiction</li>
        <li>Food & Drink</li>
        <li>Health & Wellbeing</li>
        <li>History & Politics</li>
        <li>Humor</li>
        <li>Poetry</li>
        <li>Psychology</li>
        <li>Science</li>
        <li>Technology</li>
        <li>Travel & Maps</li>
      </ul>
    </aside>
  );
};

export default Categories;
