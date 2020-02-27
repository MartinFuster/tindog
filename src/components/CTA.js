import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import ButtonOutlineSecondary from "./ButtonOutlineSecondary";

function CTA() {
  return (
    <section id="cta" data-aos="fade">
      <div className="container-fluid">
        <h3 className="call-to-action-header" data-aos="zoom-in">
          Find the True Love of Your Dog's Life Today.
        </h3>
        <div className="button-container" data-aos="zoom-in">
          <ButtonSecondary
            href="https://apps.apple.com/app/tinder/id547702041?ign-mpt=uo%3D6"
            content="Download"
            icon="fab fa-apple"
            dataAos="fade-right"
          />
        </div>
        <div
          className="button-container"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <ButtonOutlineSecondary
            href="https://play.google.com/store/apps/details?id=com.tinder&referrer=utm_source=website&utm_medium=cta&utm_campaign=website_home"
            content="Download"
            icon="fab fa-google-play"
            dataAos="fade-left"
          />
        </div>
      </div>
    </section>
  );
}

export default CTA;
