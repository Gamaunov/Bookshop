import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import { useEffect, useState } from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/bookSlice/bookSlice';

const Categories = () => {
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState(0);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  const dispatch = useDispatch();

  const books = useSelector((state) => state.bookApi.books.items);
  const categories = useSelector((state) => state.category.category);

  const handleGetBooks = async (i) => {
    const subject = categories[i].search;
    setIndex(0);
    const startIndex = index;
    // console.log(subject);
    setActive(i);
    setShowLoadMoreBtn(true);
    dispatch(getBooks({ subject, startIndex }));
  };


  // const handleLoadMore = () => {
  //   const subject = categories[i].search
  //   setIndex(index + 6);
  //   let startIndex = index;

  //   // console.log(setIndex);
  //   dispatch(getBooks({ subject, startIndex }));
  // };

  return (
    <>
      <aside className="aside">
        <ul className="categories">
          {categories.map((category, i) => (
            <li
              onClick={() => handleGetBooks(i)}
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
              <Button text="Load more" />
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Categories;
