import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import Carousel from '../../components/Carousel';
import HostProfile from '../../components/HostProfile';
import Rating from '../../components/Rating';
import Tags from '../../components/Tags';
import accommodations from '../../utils/datas/accommodations.json';
import './style.scss';

const Apartment = () => {
  const [current, setCurrent] = useState();
  const [accordionProps, setAccordionProps] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { title, location, host, rating, tags, pictures } = current || {};

  useEffect(() => {
    id &&
      accommodations.some((el) => el.id === id) &&
      setCurrent(...accommodations.filter((a) => a.id === id));
  }, [id]);

  useEffect(() => {
    current &&
      setAccordionProps(
        Object.entries(current).filter(
          (arr) => arr[0] === 'description' || arr[0] === 'equipments'
        )
      );
  }, [current]);

  useEffect(() => {
    !id ||
      (!accommodations.some((el) => el.id === id) &&
        navigate('/error', { replace: true }));
  });

  return (
    <main className="main main_accommodation">
      {pictures && <Carousel data={pictures} />}
      <section className="accommodation-details">
        <div className="accommodation-details__header">
          <div className="accommodation-details__header__left">
            <h2>{title}</h2>
            <span>{location}</span>
            {tags && <Tags tags={tags} />}
          </div>
          <div className="accommodation-details__header__right">
            {host && <HostProfile name={host.name} img={host.picture} />}
            <Rating rating={rating} />
          </div>
        </div>
        <div className="accommodation-details__content">
          {accordionProps && (
            <Accordion data={accordionProps} isInline={true} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Apartment;
