import React from "react";
import dog from "../images/dog-img.jpg";
import lady from "../images/lady-img.jpg";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="carousel slide" data-ride="carousel" id="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text">
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <img class="testimonial-image" src={dog} alt="dog-profile" />
            <em>Pebbles, New York</em>
          </div>
          <div class="carousel-item container-fluid">
            <h2 class="testimonial-text">
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img class="testimonial-image" src={lady} alt="lady-profile" />
            <em>Beverly, Illinois</em>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
