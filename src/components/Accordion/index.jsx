import React from 'react';
import AccordionItem from './AccordionItem';
import './style.scss';

// Capitalize first string letter
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

// create random key by:
// generating random number
// + converting random number to a 16 digit base-36 string
// + returning characters from 3rd to 9th position
const generateKey = Math.random().toString(36).substring(3, 9);

const displayList = (arr) => {
  return (
    <ul className="list" key={generateKey}>
      {arr.map((item, index) => (
        <li
          className="list-item"
          key={`${index}-a0e7015b-c795-4654-bb4a-239c73e6159c`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const Accordion = ({ data, isInline }) => {
  return (
    <div
      className={`accordion ${isInline ? '' : 'accordion_vertical'}`}
      role="tablist"
    >
      {data.map((item, index) => {
        let toggle = capitalize(item[0]);
        let collapse = !Array.isArray(item[1]) ? item[1] : displayList(item[1]); // Manage accordion collapse content based on whether it is text or a list

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
