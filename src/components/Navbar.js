import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title, aboutTextUtils, mode, toggleMode }) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {aboutTextUtils}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className={`form-check-label text-${
                  mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {`${
                  mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"
                }`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.defaultProps = {
  title: "Set title here",
  aboutTextUtils: "Set about text",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTextUtils: PropTypes.string,
};
