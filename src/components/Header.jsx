// src/components/Header.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css"; // Scoped CSS file for Header component

export default function Header() {
  // Currency state
  const [currency, setCurrency] = useState("INR");
  const [exchangeRates, setExchangeRates] = useState({
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    CAD: 0.016,
    GBP: 0.009,
  });

  // Handle currency change
  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
    updatePrices(selectedCurrency);
  };

  // Dummy function to update prices based on selected currency
  const updatePrices = (selectedCurrency) => {
    const conversionRate = exchangeRates[selectedCurrency];
    document.querySelectorAll(".header-price").forEach((element) => {
      const basePrice = parseFloat(element.getAttribute("data-base-price"));
      element.textContent = (basePrice * conversionRate).toFixed(2);
    });
  };

  return (
    <div className="header-top-background">
      <div className="header-container">
        <div className="header-top-wrapper">
          <div className="header-social-links">
            <a
              href="https://www.instagram.com"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
              className="header-icon-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
              className="header-icon-link"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://facebook.com"
              title="Facebook"
              target="_blank"
              rel="noreferrer"
              className="header-icon-link"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://youtube.com"
              title="YouTube"
              target="_blank"
              rel="noreferrer"
              className="header-icon-link"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className="header-storemode-nav">
            <select
              className="header-currency-converter"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="INR">Indian Rupee (INR)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="GBP">British Pound (GBP)</option>
            </select>
            <span className="header-store-mode-label">STORE MODE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
