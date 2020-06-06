import React from "react";

import { Wrapper } from "../../../hoc";

import "./Header.scss";

const Header = () => (
  <header className="Header">
    <Wrapper>
      <div className="Header_content">
        <h1>Who We Are</h1>
        <p>
          Empyrean Investments is a boutique private equity firm focused on the
          acquisition of family businesses and management buyouts both here in
          the United States and internationally. Empyrean seeks to help
          companies reach their full potential by combining our industry
          experience, capital and transaction experience with proven operating
          executives. Our proven, pragmatic approach has earned us a reputation
          as a trustworthy steward of capital. Empyrean Investments has
          developed a track record of growing businesses and providing high
          returns for its partners.
        </p>
      </div>
    </Wrapper>
  </header>
);

export default Header;
