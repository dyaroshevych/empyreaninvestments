import React from "react";

import { Wrapper } from "../../../hoc";

import { linkStrategyJpg, linkTeamJpg } from "../../../assets/img";
import "./Links.scss";

const LINKS_INFO = [
  { name: "Team", imageUrl: linkTeamJpg, link: "/team" },
  {
    name: "Investment Criteria",
    imageUrl: linkStrategyJpg,
    link: "/investment",
  },
];

const Links = () => {
  return (
    <div className="Links">
      <Wrapper className="Links_content">
        {LINKS_INFO.map(({ name, imageUrl, link }) => (
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
