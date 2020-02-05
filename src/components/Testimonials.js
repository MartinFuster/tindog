import React from "react";
import dog from "../images/dog-img.jpg";
import lady from "../images/lady-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  return (
    <section id="testimonials" data-aos="fade-up">
      <div className="carousel slide" data-ride="carousel" id="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text" data-aos="zoom-in-up">
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <img class="testimonial-image" src={dog} alt="dog-profile" />
            <em>Pebbles, New York</em>
          </div>
          <div class="carousel-item container-fluid">
            <h2 class="testimonial-text" data-aos="zoom-in-up">
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img class="testimonial-image" src={lady} alt="lady-profile" />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Testimonials;
