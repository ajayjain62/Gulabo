import React, { useState } from 'react';
import './FilterSection.css'; // Import the CSS file for styling

const FilterSection = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleFilterOptions = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3 className="filter-title">FILTER BY</h3>
        <a href="#" className="clear-all">CLEAR All</a>
      </div>

      {['BRAND', 'CATEGORY', 'PRICE', 'SIZES', 'DISCOUNT', 'OCCASION', 'COLOR', 'DELIVERY TIME', 'MORE FILTERS'].map((filter) => (
        <div className="filter-section-item" key={filter}>
          <div
            className="filter-section-header"
            onClick={() => toggleFilterOptions(filter)}
          >
            <span className="filter-section-title">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
            <span className="filter-section-icon">
              {openSections[filter] ? '▲' : '+'}
            </span>
          </div>
          <div className={`filter-options ${openSections[filter] ? 'open' : ''}`}>
            {/* Example options for each section */}
            <div className="filter-option">
              <input type="checkbox" id={`${filter}1`} />
              <label htmlFor={`${filter}1`}>{filter.charAt(0).toUpperCase() + filter.slice(1)} Option 1</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id={`${filter}2`} />
              <label htmlFor={`${filter}2`}>{filter.charAt(0).toUpperCase() + filter.slice(1)} Option 2</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
