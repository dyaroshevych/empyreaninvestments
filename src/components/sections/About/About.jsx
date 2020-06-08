import React from "react";
import { Element } from "react-scroll";

import { Wrapper } from "../../../hoc";
import { Logo } from "../../UI";

import "./About.scss";

const About = () => (
  <section className="About">
    <Element name="about-section">
      <Wrapper>
        <div className="About_content">
          <div>
            <h2>Who we are</h2>
            <p>
              Empyrean Investments is a boutique private equity firm focused on
              the acquisition of family businesses and management buyouts both
              here in the United States and internationally. Empyrean seeks to
              help companies reach their full potential by combining our
              industry experience, capital and transaction experience with
              proven operating executives. Our proven, pragmatic approach has
              earned us a reputation as a trustworthy steward of capital.
              Empyrean Investments has developed a track record of growing
              businesses and providing high returns for its partners.
            </p>
          </div>
          <div className="About_logoContainer">
            <Logo />
          </div>
        </div>
      </Wrapper>
    </Element>
  </section>
);

export default About;
