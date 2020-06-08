import React from "react";

import { Wrapper } from "../../../hoc";

import "./Team.scss";

const MEMBERS = [
  {
    name: "Jimmy Mathews",
    description: `Founder and Managing Partner at Empyrean Investments, brings 20+ years of leadership experience in building high growth, high value businesses with exceptional strategic foresight and integrative leadership for execution of a vision. He's a graduate of Boston University with a degree in Finance and Marketing and leveraged his finance and marketing expertise in helping businesses grow. His leadership experience includes startups, acquisitions, investments, board roles and sales/marketing leadership roles in a Fortune 100 company. Mr. Mathews currently serves as CEO of Rocket Air Supply, CEO of Advanced Trailer, Managing Partner at Callosum Consulting, and investor and board member at Pegasus Logistics Group amongst other companies.`,
  },
  {
    name: "Ash Kolady",
    description: `An industry leader with 20+ years of leadership experience in engineering, operations, strategy and acquisitions. Currently, he serves as an industry expert and leadership consultant to Fortune 500 and Private Equity firms. Ash was the Chief Operating Officer for AZZ incorporated, a Fort Worth, TX based publicly traded company in the Energy and Infrastructure markets.  In this role, he led a global portfolio of product and service businesses serving the power generation, nuclear and refining markets. Previously, Ash served as the Vice President of Corporate Development for AZZ where he was responsible for corporate strategy and successfully led multiple acquisitions.  Previous roles include Operations, Marketing and Business Development at Eaton Corporation.  Ash started his career as an Engineer at General Motors. He holds a degree in Engineering from Cornell University and an MBA from Michigan State University. `,
  },
  {
    name: "Tra Willbanks",
    description: `Has served as CEO of Anchor Investments since 2013 and Anchor Fabrication since 2006. He managed the acquisition of five manufacturing portfolio companies through his tenure. At Anchor Fabrication, he oversaw 10-plus years of profitability including the volatile 2009-10 economic recession. His emphasis on talent and cultural development has paved the way for his companies’ success and lays the foundation for future growth. Intimately familiar with manufacturing and family-owned businesses, his own family has been in the steel industry for more than 70 years. Tra worked with his father for 10 years before embarking on an acquisition strategy, growing his understanding of what makes steel fabricators and family-owned businesses tick. Family and faith are central pillars of his life that define his professional and personal approach — a successful fight with cancer only further focused those values. A graduate of Abilene Christian University and a CPA, his background in accounting and finance has helped him navigate the nuances of private equity in manufacturing. Tra is a proud member of Gateway Church in Southlake, TX.`,
  },
  {
    name: "Ray Canole",
    description: `Has almost 20 years of operating and global business development experience in the healthcare space.  He started his career as an investment banker with William Blair & Company, and went on to spend 10 years in progressive management positions at the Perrigo Company (NYSE:PRGO), including holding the position of Vice President/Head of Global Corporate Development.  In 2012, Ray joined Renaissance Pharma, a private equity backed start-up and over a period of four years, he became Head of Commercial Operations, leading a dermatology focused field force of 80 individuals.  When Renaissance sold its non-sterile business to Mylan (NYSE: MYL) in 2016 for $1.0 billion, Ray became Chief Strategy Officer for the remaining sterile contract development and manufacturing operation. Most recently Ray serviced as Chief Commercial Officer for Revision Skincare, a physician dispensed provider of over the counter and cosmetic products sold primarily through dermatologists and plastic surgeons. Ray holds an undergraduate degree in Economics from Princeton University and an MBA in Finance from the Wharton School at the University of Pennsylvania.`,
  },
  {
    name: "Brendon Graft",
    description: `A seasoned CFO with more than 20 years of financial management in both public and private companies. Possessing a strong M&A background, his objective approach to finance and sound negotiation skills have helped him in a variety of his investments. Brendon has overseen important optimization of processes in the accounting department and remains a strong voice on the management team. He is an MBA graduate of the Mays School of Business at Texas A&M.`,
  },
  {
    name: "Kevin Malik",
    description: `A highly-seasoned technology executive and innovator, has helped several companies leap from startup to global success in positions ranging from Board Member/CIO to Global Operations and R&D executive. With a unique background, a blend of mechanical engineering coupled with leading-edge technology savvy, Kevin specializes in delivering fully-optimized systems and building world class teams. He thrives on creating and reviewing new technical capabilities, working on strategic partnerships and growing the talent base. Experienced with global teams, he’s been responsible for large teams and a user base spanning 20+ countries.`,
  },
];

const Team = () => (
  <section className="Team">
    <Wrapper className="Team_content">
      {MEMBERS.map(({ name, description }) => (
        <div className="Team_member" key={name}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      ))}
    </Wrapper>
  </section>
);

export default Team;
