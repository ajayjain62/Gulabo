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

/* Additional Mega Menu Structure */
const menuLinks = [
  {
    name: "Comforter",
    link: "/women",
    subMenu: [
      { name: "Luxury Comforter", link: "/luxury-comforter" },
      { name: "Eco-Friendly Comforter", link: "/eco-friendly-comforter" },
    ],
  },
  {
    name: "Bedsheet",
    link: "/men",
    subMenu: [
      { name: "King Size Bedsheet", link: "/king-size-bedsheet" },
      { name: "Queen Size Bedsheet", link: "/queen-size-bedsheet" },
    ],
  },
  {
    name: "Dohar",
    link: "/kids",
    subMenu: [
      { name: "Printed Dohar", link: "/printed-dohar" },
      { name: "Solid Color Dohar", link: "/solid-dohar" },
    ],
  },
  {
    name: "Mattress Protector",
    link: "/",
    subMenu: [
      { name: "Waterproof Protector", link: "/waterproof-protector" },
      { name: "Luxury Protector", link: "/luxury-protector" },
    ],
  },
  {
    name: "Cushions",
    link: "/brands",
    subMenu: [
      { name: "Designer Cushions", link: "/designer-cushions" },
      { name: "Comfort Cushions", link: "/comfort-cushions" },
    ],
  },
];

  return (
    <div className="nav-header-container" style={{cursor: 'mouse'}}> 
    <div className="scrolling-container">
      <p className="scrolling-text"
      style={{
        fontSize:"16px",
        
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

              <div className={`menu-wrapper ${menuOpen ? "menu-open" : ""}`}>
  {menuLinks.map((item) => (
    <div key={item.name} className="menu">
      <Link to={item.link} className="menu-link" title={item.name}>
        <span style={{ color: '#6B3F4F', fontSize: '16px' }}>{item.name}</span>
      </Link>
      {item.subMenu && (
        <div className="mega-menu">
          {item.subMenu.map((subItem) => (
            <Link
              key={subItem.name}
              to={subItem.link}
              className="mega-menu-link"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
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
