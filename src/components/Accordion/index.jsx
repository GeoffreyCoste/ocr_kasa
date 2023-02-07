import React from 'react';
import AccordionItem from './AccordionItem';
import './style.scss';

const Accordion = ({ data }) => {
  return (
    <div id="accordion" role="tablist" aria-orientation="vertical">
      {data.map((item, index) => (
        <AccordionItem
          key={`${index}-c773c705-6ea5-4b19-b2ba-1b7800676e6b`}
          toggle={item.toggle}
          collapse={item.collapse}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
