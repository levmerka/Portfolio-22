import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootsrap/Dropdown'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">About</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/contact">
                <span className="nav-link active" aria-current="page">
                  Contact
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./resume">
                <span className="nav-link">Resume</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item" >
                    project1
                  </span>
                </li>
                <li>
                  <span className="dropdown-item" >
                    project2
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <span className="dropdown-item" >
                    project3
                  </span>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled">Mitchell Lev Merka</span>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
