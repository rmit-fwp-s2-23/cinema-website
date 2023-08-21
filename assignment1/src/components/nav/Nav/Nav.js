import React, { useState } from 'react';
import './Nav.css'; // Import your CSS file
import Home from '../../../Pages/Home/Home';

const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation-bar">
      <a href="" className="logo">77 Movie</a>
      <div className="dropdown-menu">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`dropdown-content ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="dropdown-item">Home</a>
          <a href="#" className="dropdown-item">About</a>
          <a href="#" className="dropdown-item">Services</a>
          {/* Add your dropdown content here */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
