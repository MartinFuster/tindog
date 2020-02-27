import React from "react";
import bizInsider from "../images/bizinsider.png";
import techCrunch from "../images/TechCrunch.png";
import mashable from "../images/mashable.png";

function Press() {
  return (
    <section id="press">
      <img
        className="press-images"
        src={bizInsider}
        alt="biz-insider-logo"
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
      />
      <img
        className="press-images"
        src={techCrunch}
        alt="tc-logo"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      />
      <img
        className="press-images"
        src={mashable}
        alt="mashable-logo"
        data-aos="fade-left"
        data-aos-anchor-placement="bottom-bottom"
      />
    </section>
  );
}

export default Press;
