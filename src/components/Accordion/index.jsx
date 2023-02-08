import React from 'react';
import AccordionItem from './AccordionItem';
import './style.scss';

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const generateKey = Math.random().toString(36).substring(3, 9);

const displayList = (arr) => {
  return (
    <ul className="list" key={generateKey}>
      {arr.map((item) => (
        <li className="list-item">{item}</li>
      ))}
    </ul>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="accordion" role="tablist" aria-orientation="vertical">
      {data.map((item, index) => {
        let toggle = capitalize(item[0]);
        let collapse = !Array.isArray(item[1]) ? item[1] : displayList(item[1]);

        return (
          <AccordionItem
            key={`${index}-c773c705-6ea5-4b19-b2ba-1b7800676e6b`}
            toggle={toggle}
            collapse={collapse}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
