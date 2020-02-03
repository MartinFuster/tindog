import React from "react";
import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Press from "./components/Press";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <Testimonials />
      <Press />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
