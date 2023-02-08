import React from 'react';
import Accordion from '../../components/Accordion';
import qualities from '../../utils/datas/about.json';
import './style.scss';

const About = () => {
  const data = qualities.map((q) => Object.entries(q)).flat();
  return (
    <main id="about">
      <div className="banner"></div>
      <Accordion data={data} />
    </main>
  );
};

export default About;
