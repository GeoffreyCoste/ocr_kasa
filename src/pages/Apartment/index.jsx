import React from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import Carousel from '../../components/Carousel';
import HostProfile from '../../components/HostProfile';
import Rating from '../../components/Rating';
import Tags from '../../components/Tags';
import accommodations from '../../utils/datas/accommodations.json';
import './style.scss';

const Apartment = () => {
  let { id } = useParams();
  let apartment = accommodations.filter((a) => a.id === id);
  const { title, location, host, rating, tags, pictures } = apartment[0];

  const data = Object.entries(apartment[0]).filter(
    (arr) => arr[0] === 'description' || arr[0] === 'equipments'
  );

  return (
    <main id="accommodation">
      <Carousel />
      <section className="accommodation__sheet">
        <div className="sheet__header">
          <div className="sheet__header__left">
            <h2>{title}</h2>
            <span>{location}</span>
            <Tags tags={tags} />
          </div>
          <div className="sheet__header__right">
            <HostProfile name={host.name} img={host.picture} />
            <Rating rating={rating} />
          </div>
        </div>
        <div className="sheet__content">
          <Accordion data={data} />
        </div>
      </section>
    </main>
  );
};

export default Apartment;
