import React from 'react';
import StarFill from './icons/StarFill';
import StarHalf from './icons/StarHalf';
import StarEmpty from './icons/StarEmpty';

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <StarFill />
        ) : stars >= number ? (
          <StarHalf />
        ) : (
          <StarEmpty />
        )}
      </span>
    );
  });

  return (
    <div className='stars__rating'>
        {ratingStar}
        <p className='stars__review'>{reviews} review</p>
    </div>
  )
};

export default Star;
