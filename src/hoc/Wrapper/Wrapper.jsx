import React from "react";

import "./Wrapper.scss";

const Wrapper = ({ className, children }) => {
  let classes = ["Wrapper"];
  if (className) classes.push(className);

  return <div className={[classes.join(" ")]}>{children}</div>;
};

export default Wrapper;
