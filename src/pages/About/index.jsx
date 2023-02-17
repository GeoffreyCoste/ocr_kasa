import React from 'react';
import Accordion from '../../components/Accordion';
import qualities from '../../utils/datas/about.json';
import './style.scss';

const About = () => {
  const data = qualities.map((q) => Object.entries(q)).flat();
  return (
    <main className="main main_about">
      <div className="main__banner"></div>
      <Accordion data={data} isInline={false} />
    </main>
  );
};

export default About;
