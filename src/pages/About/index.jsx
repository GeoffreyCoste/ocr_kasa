import React from 'react';
import Accordion from '../../components/Accordion';
import qualities from '../../utils/datas/about.json';
import './style.scss';

const About = () => {
  return (
    <main id="about">
      <div className="banner"></div>
      <Accordion data={qualities} />
    </main>
  );
};

export default About;
