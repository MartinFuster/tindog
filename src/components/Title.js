import React from "react";
import iphone from "../images/iphone6.png";
import ButtonSecondary from "./ButtonSecondary";
import ButtonOutlineSecondary from "./ButtonOutlineSecondary";

function Title() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="title-detail title-header" data-aos="zoom-in">
          Meet new and interesting dogs nearby.
        </h1>
        <div data-aos="fade-up">
          <ButtonSecondary
            href="https://apps.apple.com/app/tinder/id547702041?ign-mpt=uo%3D6"
            content="Download"
            icon="fab fa-apple"
          />
          <ButtonOutlineSecondary
            href="https://play.google.com/store/apps/details?id=com.tinder&referrer=utm_source=website&utm_medium=cta&utm_campaign=website_home"
            content="Download"
            icon="fab fa-google-play"
          />
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-left">
        <img className="iphone-image" src={iphone} alt="iphone-mockup"></img>
      </div>
    </div>
  );
}

export default Title;
