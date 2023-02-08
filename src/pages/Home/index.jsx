import React from 'react';
import Card from '../../components/Card';
import accommodations from '../../utils/datas/accommodations.json';
import './style.scss';

const Home = () => {
  return (
    <main>
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <section id="accommodations">
        <ul className="accommodations-list">
          {accommodations.map((a, index) => (
            <li
              className="accommodation-item"
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
