import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="brand-title">BONO</div>
      <a href="#" className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`navbar-links ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsActive(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsActive(false)}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsActive(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
