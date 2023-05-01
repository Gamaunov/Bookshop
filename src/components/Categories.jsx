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
  const dispatch = useDispatch();

  const books = useSelector((state) => state.bookApi.books.items);
  const categories = useSelector((state) => state.category.category);
  const index = useSelector((state) => state.startIndex.index);
  const searchSubject = useSelector((state) => state.search.searchValue);

  const handleCategory = (i) => {
    const subject = categories[i].search;
    const startIndex = 0;
    setActive(i);
    dispatch(getBooks({ subject, startIndex }));
    dispatch(setSearchValue(categories[i].search));
    dispatch(setIndex(0));
  };

  const handleIndex = () => {
    const subject = searchSubject;
    const startIndex = index + 6;
    dispatch(getBooks({ subject, startIndex }));
    dispatch(setIndex(index + 6));
  };

  useEffect(() => {
    handleCategory(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className="main__btn">
            <span onClick={() => handleIndex()}>
              <Button onClick={() => handleIndex()} text="load more" />
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Categories;
