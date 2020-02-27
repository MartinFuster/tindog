import React from "react";
import dog from "../images/dog-img.jpg";
import lady from "../images/lady-img.jpg";
import Press from "./Press";

function Testimonials() {
  return (
    <section id="testimonials" data-aos="fade">
      <div className="carousel slide" data-ride="carousel" id="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text" data-aos="zoom-in-up">
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <img className="testimonial-image" src={dog} alt="dog-profile" />
            <em>Pebbles, New York</em>
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text" data-aos="zoom-in-up">
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img className="testimonial-image" src={lady} alt="lady-profile" />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Press />
    </section>
  );
}

export default Testimonials;
