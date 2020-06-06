import React from "react";

import { Wrapper } from "../../../hoc";

import "./Links.scss";

const Links = ({ links }) => {
  return (
    <div className="Links">
      <Wrapper className="Links_content">
        {links.map(({ name, imageUrl, link }) => (
          <a
            href={link}
            key={link}
            className="Links_item"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="Links_itemBackgroundShade"></div>
            <span className="Links_itemText">{name}</span>
          </a>
        ))}
      </Wrapper>
    </div>
  );
};

export default Links;
