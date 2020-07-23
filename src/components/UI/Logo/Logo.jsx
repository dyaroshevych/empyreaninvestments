import React from "react";

import { logoJpg } from "../../../assets/img";

import "./Logo.scss";

const Logo = () => (
  <a href="/" alt="Empyrean Investments">
    <img src={logoJpg} alt="Empyrean Investments" className="Logo" />
  </a>
);

export default Logo;
