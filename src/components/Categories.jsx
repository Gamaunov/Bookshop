import { v4 as uuidv4 } from 'uuid';
import { categories } from '../utils/categories';
import Card from './Card';
import cl from 'classnames';

const Categories = () => {


  return (
    <>
      <aside className='aside'>
        <ul className='categories'>
          {categories.map((category, i) => (
            <li
            className='category'
            key={uuidv4()}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>
      <main className='main'>
        <section className='main__inner'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
};

export default Categories;
