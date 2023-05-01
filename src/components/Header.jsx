import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import user from '../assets/img/user.svg';
import search from '../assets/img/search.svg';
import shopBag from '../assets/img/shop-bag.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/bookSlice/bookSlice';
import { setSearchValue } from '../redux/searchValueSlice/searchValueSlice';

const Header = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const [activeInput, setActiveInput] = useState('hidden');
  const [activeIcon, setActiveIcon] = useState('hidden');
  const {items} = useSelector(state => state.cart)

  const onClear = () => {
    setValue('');
    inputRef.current?.focus();
  };
  const handleClassInput = () => {
    activeInput === 'header__input'
      ? setActiveInput('hidden')
      : setActiveInput('header__input');
    activeIcon === 'clearIcon'
      ? setActiveIcon('hidden')
      : setActiveIcon('clearIcon');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      const subject = str;
      const startIndex = 0;
      dispatch(getBooks({ subject, startIndex }));
      dispatch(setSearchValue(str));
    }, 700),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };


  // const { items, totalPrice } = useSelector((state) => state.cart);

  // const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="header">
      <Link to="/">
        <h1 className="header-logo">Bookshop</h1>
      </Link>
      <nav className="header-nav">
        <ul className="header-navList">
          <li className="header-link">books</li>
          <li className="header-link">audiobooks</li>
          <li className="header-link">Stationery & gifts</li>
          <li className="header-link">blog</li>
        </ul>
      </nav>
      <div className="header-userBar">
        <Link to="/user">
          <img className="header-icon" src={user} alt="user" />
        </Link>
        <img
          onClick={handleClassInput}
          className="header-icon"
          src={search}
          alt="search"
        />
        <input
          className={activeInput}
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          type="text"
          placeholder="Ищу работу..."
        />
        {value && (
          <svg
            onClick={onClear}
            className={activeIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
          </svg>
        )}

        <Link to="/cart">
          <div className="header-shopBag">
            <img className="header-icon" src={shopBag} alt="shopBag" />
            <span className="header-shopCount">{items.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
