import React from "react";

import { logoWebp } from "../../../assets/img";

import "./Logo.scss";

const Logo = () => (
  <a href="/" alt="Empyrean Investments">
    <img src={logoWebp} alt="Empyrean Investments" className="Logo" />
  </a>
);

export default Logo;
