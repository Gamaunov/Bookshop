import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import { useEffect, useState } from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/bookSlice/bookSlice';
import { setIndex } from '../redux/startIndex/startIndexSlice';
import { setSearchValue } from '../redux/searchValueSlice/searchValueSlice';

const Categories = () => {
  const [active, setActive] = useState(0);
  // const [index, setIndex] = useState(0);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const dispatch = useDispatch();

  const books = useSelector((state) => state.bookApi.books.items);
  const categories = useSelector((state) => state.category.category);
  const index = useSelector((state) => state.startIndex.index);
  const searchSubject = useSelector((state) => state.search.searchValue);

  const handleGetBooks = async (i) => {
    if (i) dispatch(setSearchValue(categories[i].search));
    const subject = i ? categories[i].search : searchSubject;
    const startIndex = index;
    setActive(i);
    setShowLoadMoreBtn(true);
    dispatch(getBooks({ subject, startIndex }));

    console.log(subject);
    console.log(startIndex);
  };

  const handleCategory = (i) => {
    dispatch(setIndex(0));
    handleGetBooks(i);
  };

  const handleIndex = () => {
    dispatch(setIndex(index + 6));
    handleGetBooks();
  };

  return (
    <>
      <aside className="aside">
        <ul className="categories">
          {categories.map((category, i) => (
            <li
              onClick={() => handleCategory(i)}
              className={active === i ? 'active' : 'category'}
              key={uuidv4()}
            >
              {category.category}
            </li>
          ))}
        </ul>
      </aside>
      <main className="main">
        <section className="main__inner">
          <div className="main__cards">
            {books?.map((book) => (
              <Card key={uuidv4()} book={book} />
            ))}
          </div>
          {showLoadMoreBtn && (
            <div className="main__btn">
              <Button click={handleIndex} text="Load more" />
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Categories;
