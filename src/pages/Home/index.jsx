import React from 'react';
import Card from '../../components/Card';
import accommodations from '../../utils/datas/accommodations.json';
import './style.scss';

const Home = () => {
  return (
    <main className="main main_home">
      <div className="main__banner">
        <h1 className="main__banner__title">Chez vous, partout et ailleurs</h1>
      </div>
      <section className="accommodations">
        <ul className="accommodations__list">
          {accommodations.map((a, index) => (
            <li
              className="accommodations__item"
              key={`${a.id}-90984766-ee5c-475f-9718-f3834f0f1e55`}
            >
              <Card id={a.id} title={a.title} cover={a.cover} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
