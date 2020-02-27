import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      data-aos="zoom"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div>
        <a
          href="mailto:martinfuster3@gmail.com"
          rel="noopener noreferrer"
          aria-label="email"
        >
          <i className="footer-icon far fa-envelope fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/mrtinfuster"
          target="_blank"
          rel="noopener noreferrer"
          arialabel="instagram"
        >
          <i className="footer-icon fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/martin-fuster-7b1b381a2/"
          target="_blank"
          rel="noopener noreferrer"
          arialabel="linkedin"
        >
          <i className="footer-icon fab fa-linkedin-in fa-2x"></i>
        </a>
      </div>
      <p>© {year} Martin Fuster</p>
    </footer>
  );
}

export default Footer;
