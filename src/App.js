import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import {
  Navigation,
  Header,
  About,
  Links,
  Team,
  Contact,
  Investment,
  Info,
} from "./components/sections";

import "./App.scss";

const App = () => (
  <div>
    <Router>
      <Navigation />
      <Route path="/" exact>
        <Header />
        <About />
        <Links />
        <Contact />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/investment">
        <Investment />
      </Route>
      <Route path="/contact">
        <Info />
        <Contact centered />
      </Route>
    </Router>
  </div>
);

export default App;
