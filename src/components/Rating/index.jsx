import React from 'react';
import Star from './Star';
import './style.scss';

const Rating = ({ rating }) => {
  const selectedStars = parseInt(rating);

  return (
    <div className="rating">
      <ul className="rating__list">
        {[1, 2, 3, 4, 5].map((n, index) => (
          <li
            className="rating__item"
            key={`${index}-b99b6d11-d493-42f7-83b6-f3e9aef32d88`}
          >
            <Star selected={n <= selectedStars} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
