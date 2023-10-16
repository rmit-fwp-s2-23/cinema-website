import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { getUser, removeUser } from "../../Repository/Account.js";
import movieData from "../movie/MovieData";


const NavigationBar = () => {
  const data = getUser();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null); // Ref to the search input element
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    removeUser();
    // Perform any additional logout actions here
  };
  
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter movie titles based on the query
    const filtered = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleSearchClick = () => {
    setShowDropdown(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navigation-bar">
      <a href="/" className="logo">
        Loop Cinemas
      </a>
      <div className="search-menu">
      <div className="search-bar" ref={searchRef}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            onClick={handleSearchClick}
            onBlur={handleSearchBlur}
          />
          {showDropdown && (
            <div className="search-dropdown">
              <ul>
                {filteredMovies.map((movie) => (
                  <li key={movie.id}>
                    <Link
                      to={`/movie/${movie.id}`}
                      onClick={() => setShowDropdown(false)}
                    >
                      {movie.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
      </div>
    </nav>
  );
};

export default NavigationBar;
