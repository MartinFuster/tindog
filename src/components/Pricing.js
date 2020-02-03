import React from "react";

function Pricing() {
  return (
    <section id="pricing">
      <div className="container-fluid">
        <h2 className="title-header">A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p>

        <div className="row">
          <div className="pricing-card col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="section-header">Chihuahua</h3>
              </div>
              <div className="card-body">
                <h2 className="title-header">Free</h2>
                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
                <p>&nbsp;</p>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-large btn-block price-button"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-card col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="section-header">Labrador</h3>
              </div>
              <div className="card-body">
                <h2 className="title-header">$49 / mo</h2>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
                <p>&nbsp;</p>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-large btn-block price-button"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-card col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3 className="section-header">Mastiff</h3>
              </div>
              <div className="card-body">
                <h2 className="title-header">$99 / mo</h2>
                <p>Pirority Listing</p>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-large btn-block price-button"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
