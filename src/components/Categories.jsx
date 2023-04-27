import { v4 as uuidv4 } from 'uuid';
import { categories } from '../utils/categories';
import Card from './Card';
import cl from 'classnames';
import { useEffect, useState } from 'react';
import Button from './Button';

const Categories = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <aside className="aside">
        <ul className="categories">
          {categories.map((category, i) => (
            <li
              onClick={() => setActive(i)}
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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
