import React from 'react';
import Arrow from '../../Arrow';

const AccordionToggle = ({ toggle, index, active, handleClick }) => {
  return (
    <button
      className="panel__toggle"
      role="tab"
      id={`tab-${index + 1}`}
      aria-selected="true"
      aria-controls={`panel-${index + 1}`}
      aria-expanded={active}
      onClick={() => handleClick()}
    >
      <h2>{toggle}</h2>
      <Arrow isActive={active} />
    </button>
  );
};

export default AccordionToggle;
