import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Card = ({ id, title, cover }) => {
  return (
    <article className="card">
      <Link to={`/apartment/${id}`} className="card__link">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </Link>
    </article>
  );
};

export default Card;
