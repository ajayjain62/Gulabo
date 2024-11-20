// File: MobileHeader.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import "./MobileHeader.css"; // CSS for styling

const MobileHeader = () => {
  return (
    <motion.header
      className="mobile-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Left: Logo */}
      <div className="header-logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>

      {/* Center: Search Bar */}
      <motion.div
        className="header-search"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          aria-label="Search"
        />
      </motion.div>

      {/* Right: Icons */}
      <div className="header-icons">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="icon-container"
        >
          <FaShoppingCart className="header-icon" />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="icon-container"
        >
          <FaBars className="header-icon" />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default MobileHeader;
