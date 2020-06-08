import React from "react";

import { Header, About, Links, Contact } from "../sections";

import { linkStrategyJpg, linkTeamJpg } from "../../assets/img";

const HomePage = () => {
  const links = [
    { name: "Team", imageUrl: linkTeamJpg, link: "/team" },
    {
      name: "Investment Criteria",
      imageUrl: linkStrategyJpg,
      link: "/investment",
    },
  ];

  return (
    <div>
      <Header />
      <About />
      <Links links={links} />
      <Contact />
    </div>
  );
};

export default HomePage;
