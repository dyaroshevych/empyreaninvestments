import React from "react";

import "./ImageContainer.scss";

const ImageContainer = ({ url, alt }) => (
  <div
    className="ImageContainer"
    style={{ backgroundImage: `url(${url})` }}
  ></div>
);

export default ImageContainer;
