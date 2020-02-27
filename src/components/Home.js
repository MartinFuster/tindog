import React from "react";
import Header from "./Header";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import CTA from "./CTA";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
