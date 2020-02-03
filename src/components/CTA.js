import React from "react";

function CTA() {
  return (
    <section id="cta">
      <div class="container-fluid">
        <h3 class="call-to-action-header">
          Find the True Love of Your Dog's Life Today.
        </h3>
        <button type="button" class="btn btn-secondary btn-lg">
          <i class="fab fa-apple"></i> Download
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg  download-button-gplay"
        >
          <i class="fab fa-google-play"></i> Download
        </button>
      </div>
    </section>
  );
}

export default CTA;
