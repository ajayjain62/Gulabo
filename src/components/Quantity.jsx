// src/components/QuantitySelector.js
import React, { useState } from 'react';
import './QuantitySelector.css';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <div className="quantity-text">QUANTITY</div>
      <div className="quantity-input-box">
        <span className="quantity-minus" onClick={handleDecrease}>
          -
        </span>
        <input
          type="text"
          value={quantity}
          readOnly
          className="quantity-input"
        />
        <span className="quantity-plus" onClick={handleIncrease}>
          +
        </span>
      </div>
      <div id="deliveryDetailContainer" />
    </div>
  );
};

export default QuantitySelector;
