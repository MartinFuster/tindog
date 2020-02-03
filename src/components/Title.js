import React from "react";
import iphone from "../images/iphone6.png";

function Title() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="title-detail title-header">
          Meet new and interesting dogs nearby.
        </h1>
        <button type="button" className="btn btn-secondary btn-lg">
          <i className="fab fa-apple"></i> Download
        </button>
        <button type="button" className="btn btn-outline-secondary btn-lg">
          <i className="fab fa-google-play"></i> Download
        </button>
      </div>

      <div className="col-lg-6">
        <img className="iphone-image" src={iphone} alt="iphone-mockup"></img>
      </div>
    </div>
  );
}

export default Title;
