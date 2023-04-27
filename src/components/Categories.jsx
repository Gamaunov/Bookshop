import { v4 as uuidv4 } from 'uuid';
import { categories } from '../utils/categories';
import Card from './Card';
import { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import { searchValue } from '../utils/searchValue';
const Categories = () => {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState('subject:Fiction');
  const [bookData, setBookData] = useState([]);

  const API_KEY = process.env.REACT_APP_KEY;
  const handleClickCategory = (i) => {
    setActive(i);
    setSearch(searchValue[i]);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}
    &key=${API_KEY}&printType=books&startIndex=0&maxResults=6&langRestrict=en`,
      )
      .then((res) => setBookData(res.data.items))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <aside className="aside">
        <ul className="categories">
          {categories.map((category, i) => (
            <li
              onClick={() => handleClickCategory(i)}
              className={active === i ? 'active' : 'category'}
              key={uuidv4()}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>
      <main className="main">
        <section className="main__inner">
          <div className="main__cards">
            {bookData?.map((item) => {
              const img = item.volumeInfo.imageLinks?.thumbnail;
              const author = [item.volumeInfo.authors];
              const title = item.volumeInfo.title;
              const description = item.volumeInfo.description
                ?.slice(0, 100)
                .concat('...');
              const price = item.saleInfo?.retailPrice?.amount;
              const currencyCode = item.saleInfo?.retailPrice?.currencyCode;
              console.log(item.volumeInfo);
              // console.log('averageRating',item.volumeInfo?.averageRating);
              const stars = item.volumeInfo?.averageRating;
              const reviews = item.volumeInfo?.ratingsCount;
              return (
                <Card
                  key={uuidv4()}
                  img={img}
                  author={author}
                  title={title}
                  description={description}
                  price={price}
                  currencyCode={currencyCode}
                  stars={stars}
                  reviews={reviews}
                />
              );
            })}
          </div>
          <div className="main__btn">
            <Button text="Load more" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Categories;
