import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

function Header() {
  return (
    <section id="title">
      <div className="container-fluid">
        <Navbar />
        <Title />
      </div>
    </section>
  );
}

export default Header;
