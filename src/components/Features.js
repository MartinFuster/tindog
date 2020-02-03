import React from "react";

function Features() {
  return (
    <section id="features">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <i className="fas fa-check-circle fa-5x features-margin ft-icon"></i>
            <h3 className="features-margin section-header">Easy to use.</h3>
            <p className="features-margin">
              So easy to use, even your dog could do it.
            </p>
          </div>
          <div className="col-lg-4">
            <i className="fas fa-bullseye fa-5x features-margin ft-icon"></i>
            <h3 className="features-margin section-header">Elite Clientele</h3>
            <p className="features-marginft">
              We have all the dogs, the greatest dogs.
            </p>
          </div>
          <div className="col-lg-4">
            <i className="fas fa-heart fa-5x features-margin ft-icon"></i>
            <h3 className="features-margin section-header">
              Guaranteed to work.
            </h3>
            <p className="features-margin">
              Find the love of your dog's life or your money back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
