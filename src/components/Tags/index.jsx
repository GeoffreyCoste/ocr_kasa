import React from 'react';
import Tag from './Tag';
import './style.scss';

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      <ul className="tags__list">
        {tags.map((tag, index) => (
          <li
            className="tags__item"
            key={`${index}-517c4f53-ad3e-42d3-a35c-af31b43730e0`}
          >
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
