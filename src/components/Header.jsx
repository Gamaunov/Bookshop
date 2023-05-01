import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/bookSlice/bookSlice';
import { setSearchValue } from '../redux/searchValueSlice/searchValueSlice';
import User from './icons/User';
import ShopBag from './icons/ShopBag';

const Header = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const [activeInput, setActiveInput] = useState('hidden');
  const [activeIcon, setActiveIcon] = useState('hidden');
  const { items } = useSelector((state) => state.cart);

  const onClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  const handleInput = () => {
    handleClassInput();
    setValue('');
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

  return (
    <header className="header__fixed">
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
            <User className="header-icon" />
          </Link>
          <svg
            onClick={handleInput}
            className="header-icon"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5ZM10.8845 11.2986C9.72859 12.3554 8.18957 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.04017 12.4643 9.45523 11.5691 10.569L15 13.9999L14.2929 14.707L10.8845 11.2986Z"
              fill="#1C2A39"
            />
          </svg>
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
              <ShopBag className="header-icon" />
              <span className="header-shopCount">{items.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
