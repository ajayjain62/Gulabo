import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Headerimg from "./Headerimg";
import Headericons from "./Headericons";
import "./NavHeader.css"; // Import external CSS for styling
import { color } from "framer-motion";
import "../assets/css/textanimation.css"


export default function NavHeader() {
  // State to manage the hamburger menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Links for each menu item
  const menuLinks = [
    { name: "Comforter", link: "/women" }, // Updated for React Router
    { name: "Bedsheet", link: "/men" },     // Updated for React Router
    { name: "Dohar", link: "/kids" },   // Updated for React Router
    { name: "Mattress Protector", link: "/" },       // Updated for React Router
    { name: "Cushions", link: "/brands" } // Updated for React Router
    
  ];

  return (
    <div className="nav-header-container" style={{cursor: 'mouse'}}> 
    <div className="scrolling-container">
      <p className="scrolling-text"
      style={{
        fontSize:"16px"
      }}
      >Welcome to Gulabi Decor! Avail our exclusive offer—use code FIRST20 on your first order and get 20% off. Shop now and enjoy premium quality bedsheets and mattresses!</p>
    </div>
      <div className="MuiContainer-root" > 
        <div className="nav-header-wrapper">
          <div className="header-content-wrapper">
            {/* Header Content */}
            <div className="header-content">
              {/* Logo Section */}
              <div className="pantaloons-logo">
                <Link to="/" title="Gulabi Decor" className="logo-link">
                  <img
                    className="svgIconImg"
                    height={50}
                    width={200}
                    alt="Gulabi Decor Logo"
                    src="https://i.postimg.cc/tgQRq65g/Gulabidecor-Brand-kit-2.jpg"
                  />
                </Link>
              </div>

              {/* Hamburger Menu for Mobile */}
              <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>

              {/* Menu Section */}
              <div className={`menu-wrapper ${menuOpen ? "menu-open" : ""}`}>
                {menuLinks.map((item) => (
                  <div key={item.name} className="menu">
                    <Link to={item.link} className="menu-link" title={item.name}>
                      <span style={{color: '#6B3F4F', fontSize: '16px'}}>{item.name}</span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Header Icons */}
              <div className="header-icons">
                <Headericons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
