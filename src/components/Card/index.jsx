import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Card = ({ id, title, cover }) => {
  return (
    <article className="card">
      <Link to={`/apartment/${id}`} className="card__link">
        <img src={cover} alt={title} className="card__link__img" />
        <h2 className="card__link__title">{title}</h2>
      </Link>
    </article>
  );
};

export default Card;
