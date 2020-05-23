import React from "react";

import { Button } from "../../";

import "./TextContainer.scss";

const TextContainer = ({ heading, buttonLink, children }) => (
  <div className="TextContainer">
    <h2>{heading}</h2>
    {children}
    <Button>
      <a href={`/${buttonLink}`}>{buttonLink}</a>
    </Button>
  </div>
);

export default TextContainer;
