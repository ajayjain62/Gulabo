// src/components/Accordion.js
import React, { useState } from 'react';
import './Accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const accordionData = [
  {
    title: 'MATERIAL & FIT',
    content: 'Detailed information about material and fit goes here...',
  },
  {
    title: 'FABRIC CARE',
    content: 'Instructions on fabric care go here...',
  },
  {
    title: 'DELIVERY & RETURNS',
    content: 'Details about delivery and return policies...',
  },
  {
    title: 'DETAILS',
    content: 'Additional product details are described here...',
  },
  {
    title: 'REVIEWS',
    content: 'User reviews and ratings are displayed here...',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <p className="accordion-title">{item.title}</p>
            <FontAwesomeIcon
              icon={activeIndex === index ? faMinus : faPlus}
              className="accordion-icon"
            />
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
