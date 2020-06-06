import React from "react";

import { Wrapper } from "../../../hoc";
import { Logo } from "../../UI";

import "./Navigation.scss";

const NavigationLinks = ({ links }) => (
  <ul className="Navigation_links">
    {links.map(({ name, link }) => (
      <li key={link}>
        <a href={link} className="Navigation_link">
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const Navigation = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Team", link: "/team" },
    { name: "Investment Criteria", link: "/investment" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="Navigation">
      <Wrapper>
        <ul className="Navigation_container">
          <li className="Navigation_linksContainer">
            <NavigationLinks links={links.slice(0, 2)} />
          </li>
          <li>
            <Logo />
          </li>
          <li className="Navigation_linksContainer">
            <NavigationLinks links={links.slice(2)} />
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
