import React from 'react';
import Tag from './Tag';
import './style.scss';

const Tags = ({ tags }) => {
  return (
    <ul className="tags-list">
      {tags.map((tag, index) => (
        <li
          className="tag-item"
          key={`${index}-517c4f53-ad3e-42d3-a35c-af31b43730e0`}
        >
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
};

export default Tags;
