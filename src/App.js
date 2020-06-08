import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomePage } from "./components/pages";
import { Navigation, Team, Contact, Investment } from "./components/sections";

import "./App.scss";

const App = () => (
  <div>
    <Router>
      <Navigation />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/investment">
        <Investment />
      </Route>
    </Router>
  </div>
);

export default App;
