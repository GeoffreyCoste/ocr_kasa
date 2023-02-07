import React from 'react';

const AccordionCollapse = ({ collapse, index, active }) => {
  return (
    <div
      className="panel__collapse"
      role="tabpanel"
      id={`panel-${index + 1}`}
      aria-labelledby={`tab-${index + 1}`}
      aria-hidden={!active}
      tabIndex="0"
    >
      <p className="panel__content">{collapse}</p>
    </div>
  );
};

export default AccordionCollapse;
