import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import ButtonOutlineSecondary from "./ButtonOutlineSecondary";

function CTA() {
  return (
    <section id="cta" data-aos="fade-up">
      <div class="container-fluid">
        <h3 class="call-to-action-header" data-aos="zoom-in">
          Find the True Love of Your Dog's Life Today.
        </h3>
        <div data-aos="zoom-in">
          <ButtonSecondary
            href="https://apps.apple.com/app/tinder/id547702041?ign-mpt=uo%3D6"
            content="Download"
            icon="fab fa-apple"
            dataAos="fade-right"
          />
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
