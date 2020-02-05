import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" data-aos="zoom">
      <div>
        <a
          class="footer-icon fab fa-twitter fa-2x"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          class="footer-icon fab fa-facebook-f fa-2x"
          href="https://es-la.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          class="footer-icon fab fa-instagram fa-2x"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          class="footer-icon fas fa-envelope fa-2x"
          href="https://www.google.com/intl/es-419/gmail/about/#"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <p>© Copyright {year} tindog</p>
    </footer>
  );
}

export default Footer;
