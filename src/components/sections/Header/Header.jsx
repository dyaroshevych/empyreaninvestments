import React from "react";
import { Link } from "react-scroll";

import { Wrapper } from "../../../hoc";

import "./Header.scss";

const Header = () => (
  <header className="Header">
    <Wrapper>
      <h1>
        We help companies enhance their performance and realize their potential
      </h1>
      <Link
        className="Header_scrollContainer"
        to="about-section"
        offset={-165}
        smooth
      >
        <div className="Header_scrollLine"></div>
        <h4>Learn More</h4>
      </Link>
    </Wrapper>
  </header>
);

export default Header;
