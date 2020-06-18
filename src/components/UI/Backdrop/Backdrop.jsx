import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ isVisible, toggleVisibility }) => (
  <div
    className="Backdrop"
    onClick={toggleVisibility}
    visible={String(isVisible)}
  ></div>
);

export default Backdrop;
