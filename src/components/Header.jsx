import React from 'react';
import user from '../assets/img/user.svg';
import search from '../assets/img/search.svg';
import shopBag from '../assets/img/shop-bag.svg';

const Header = () => {
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <h1 className="header-logo">Bookshop</h1>
      {/* </Link> */}
      <nav className="header-nav">
        <ul className="header-navList">
          <li className="header-link">books</li>
          <li className="header-link">audiobooks</li>
          <li className="header-link">Stationery & gifts</li>
          <li className="header-link">blog</li>
        </ul>
      </nav>
      <div className="header-userBar">
        <div>
          <img className="header-icon" src={user} alt="user" />
        </div>
        <div>
          <img className="header-icon" src={search} alt="search" />
        </div>
        <div className="header-shopBag">
          <img className="header-icon" src={shopBag} alt="shopBag" />
          <span className="header-shopCount">3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
