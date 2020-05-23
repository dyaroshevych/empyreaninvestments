import React from "react";

import { Wrapper } from "../../../hoc";
import { ImageContainer, TextContainer } from "./";

import "./Section.scss";

const Section = ({ title, imageUrl, buttonLink, children }) => (
  <section className="Section">
    <Wrapper className="Section_container">
      <ImageContainer url={imageUrl} alt={title}></ImageContainer>
      <TextContainer heading={title} buttonLink={buttonLink}>
        {children}
      </TextContainer>
    </Wrapper>
  </section>
);

export default Section;
