import React from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  AOS.init({
    duration: 1000,
    delay: 250
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
