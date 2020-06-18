import React from "react";
import { useLocation } from "react-router-dom";

import { Wrapper } from "../../../hoc";
import { Mobile } from "./";
import { Logo } from "../../UI";

import "./Navigation.scss";

const NavigationLinks = ({ links, location }) => (
  <ul className="Navigation_list">
    {links.map(({ name, link }) => (
      <li
        key={link}
        className="Navigation_linkContainer"
        active={String(link === location)}
      >
        <a href={link} className="Navigation_link">
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const Navigation = () => {
  const { pathname: location } = useLocation();

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
            <NavigationLinks links={links.slice(0, 2)} location={location} />
          </li>
          <li className="Navigation_logoContainer">
            <Logo />
          </li>
          <li className="Navigation_linksContainer">
            <NavigationLinks links={links.slice(2)} location={location} />
          </li>
          <Mobile links={links} />
        </ul>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
