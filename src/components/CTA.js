import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import ButtonOutlineSecondary from "./ButtonOutlineSecondary";

function CTA() {
  return (
    <section id="cta">
      <div class="container-fluid">
        <h3 class="call-to-action-header">
          Find the True Love of Your Dog's Life Today.
        </h3>

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
    </section>
  );
}

export default CTA;
