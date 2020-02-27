import React from "react";
import NotFoundImg from "../images/page-not-found.png";
import Footer from "./Footer";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="no-match">
      <div className="content">
        <div className="container" data-aos="fade">
          <div className="error__container">
            <div className="error__content">
              <h1 className="big-text">¡Whoops!</h1>
              <h2 className="text">
                We didnt find the page you are looking for
              </h2>
              <Link to="/">
                <button type="button" className="button-secondary">
                  <i className="fas fa-home"></i>&nbsp; Go Back
                </button>
              </Link>
            </div>
            <div className="error__image-container">
              <img src={NotFoundImg} alt="Not found" className="error__image" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
