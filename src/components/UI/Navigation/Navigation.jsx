import React from "react";

import { Wrapper } from "../../../hoc";
import { Logo } from "../";

import "./Navigation.scss";

const Navigation = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Our Team", link: "/team" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className="Navigation">
      <Wrapper>
        <ul className="Navigation_container">
          <li>
            <Logo />
          </li>
          <li>
            <ul className="Navigation_links">
              {links.map(({ name, link }) => (
                <li key={link}>
                  <a href={link} className="Navigation_link">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
