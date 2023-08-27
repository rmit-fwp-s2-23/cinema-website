import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { getUser, removeUser } from "../../Repository/Account.js";

const NavigationBar = () => {
  const data = getUser();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    removeUser();
    // Perform any additional logout actions here
  };

  return (
    <nav className="navigation-bar">
      <a href="/" className="logo">
        Loop Cinemas
      </a>
      <div className="dropdown-menu">
        <div className="hamburger" onMouseOver={toggleMenu}>
          <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <div className={`dropdown-content ${isMenuOpen ? "open" : ""}`}>
          <a href="/" className="dropdown-item">
            Home
          </a>
          <a href="#" className="dropdown-item">
            About
          </a>
          {/* <a href="#" className="dropdown-item">
            Services
          </a> */}
          {data !== null && (
            <React.Fragment>
              <Link to="/MyProfile" className="dropdown-item">
                Profile
              </Link>
              <Link
                to="/login"
                className="dropdown-item"
                onClick={handleLogout}
              >
                Log Out
              </Link>
            </React.Fragment>
          )}
          {data === null && (
            <React.Fragment>
              <Link to="/Login" className="dropdown-item">
                Sign In
              </Link>
              <Link to="/Register" className="dropdown-item">
                Sign Up
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
