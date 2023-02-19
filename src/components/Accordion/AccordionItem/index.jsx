import React, { useState } from 'react';
import AccordionCollapse from '../AccordionCollapse';
import AccordionToggle from '../AccordionToggle';

const AccordionItem = ({ toggle, collapse, index }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="panel">
      <AccordionToggle
        toggle={toggle}
        index={index}
        active={isActive}
        handleClick={handleClick}
      />
      <AccordionCollapse collapse={collapse} index={index} active={isActive} />
    </div>
  );
};

export default AccordionItem;
