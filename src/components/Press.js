import React from "react";
import bizInsider from "../images/bizinsider.png";
import techCrunch from "../images/TechCrunch.png";
import mashable from "../images/mashable.png";

function Press() {
  return (
    <section id="press">
      <img className="press-images" src={bizInsider} alt="biz-insider-logo" />
      <img className="press-images" src={techCrunch} alt="tc-logo" />
      <img className="press-images" src={mashable} alt="mashable-logo" />
    </section>
  );
}

export default Press;
