import React from "react";

import { HomePage } from "./components/pages";
import { Navigation } from "./components/sections";

import "./App.scss";

const App = () => (
  <div>
    <Navigation />
    <HomePage />
  </div>
);

export default App;
