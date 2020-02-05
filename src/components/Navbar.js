import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" data-aos="fade">
      <a className="navbar-brand" href="/">
        <i className="fas fa-fire"></i> tindog
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars tog-icon"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#footer">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cta">
              Download
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
