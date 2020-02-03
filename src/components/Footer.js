import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <i class="footer-icon fab fa-twitter fa-2x" href="#"></i>
      <i class="footer-icon fab fa-facebook-f fa-2x" href="#"></i>
      <i class="footer-icon fab fa-instagram fa-2x" href="#"></i>
      <i class="footer-icon fas fa-envelope fa-2x" href="#"></i>
      <p>© Copyright {year} tindog</p>
    </footer>
  );
}

export default Footer;
