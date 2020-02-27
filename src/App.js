import React from "react";
import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 1000,
    delay: 250
  });
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

export default App;
