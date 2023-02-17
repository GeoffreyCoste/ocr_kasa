import React from 'react';
import AnimatedArrow from '../../AnimatedArrow';

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
      <AnimatedArrow isActive={active} />
    </button>
  );
};

export default AccordionToggle;
