import React from "react";
import AnkerButton from "./AnkerButton";

function Pricing() {
  return (
    <section id="pricing" data-aos="fade-up">
      <div className="container-fluid">
        <h2 className="title-header title-header__pricing" data-aos="zoom-in">
          A Plan for Every Dog's Needs
        </h2>
        <p className="title-header__paragraph">
          Simple and affordable price plans for your and your dog.
        </p>

        <div className="row" data-aos="fade-up">
          <div className="pricing-card col-lg-4" data-aos="zoom-in">
            <div className="card">
              <div className="card-header card-header__chihuahua">
                <h3 className="section-header">Chihuahua</h3>
              </div>
              <div className="card-body">
                <h2 className="title-header__card">Free</h2>
                <div className="item">
                  <p className="price-item">
                    Pirority Listing{" "}
                    <i class="fas fa-times price-icon-cross"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited Matches{" "}
                    <i class="fas fa-times price-icon-cross"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited Messages{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited App Usage{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <p className="price-item">&nbsp;</p>
                <AnkerButton content="Sign Up" href="#" />
              </div>
            </div>
          </div>

          <div className="pricing-card col-lg-4" data-aos="zoom-in">
            <div className="card">
              <div className="card-header card-header__labrador">
                <h3 className="section-header">Labrador</h3>
                <div className="section-header__recommended">
                  <h3 className="section-header__recommended-text">
                    Best Seller<i class="fas fa-crown recommended-icon"></i>
                  </h3>
                </div>
              </div>
              <div className="card-body">
                <h2 className="title-header__card">$49 / mo</h2>
                <div className="item">
                  <p className="price-item">
                    Pirority Listing{" "}
                    <i class="fas fa-times price-icon-cross"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited Matches{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited Messages{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited App Usage{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <p>&nbsp;</p>
                <AnkerButton content="Sign Up" href="#" />
              </div>
            </div>
          </div>

          <div className="pricing-card col-lg-4" data-aos="zoom-in">
            <div className="card">
              <div className="card-header card-header__mastiff">
                <h3 className="section-header">Mastiff</h3>
              </div>
              <div className="card-body">
                <h2 className="title-header__card">$99 / mo</h2>
                <div className="item">
                  <p className="price-item">
                    Pirority Listing{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited Matches{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited Messages{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <div className="item">
                  <p className="price-item">
                    Unlimited App Usage{" "}
                    <i class="fas fa-check price-icon-check"></i>
                  </p>
                </div>
                <p>&nbsp;</p>
                <AnkerButton content="Sign Up" href="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
