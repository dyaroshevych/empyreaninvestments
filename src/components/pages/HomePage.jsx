import React from "react";

import { Section } from "../UI";

import { aboutJpg, teamJpg, contactJpg } from "../../assets/img";

const HomePage = () => {
  const investmentList = [
    "Company EBITDA: $2 - $5 Million",
    "Company Revenue: $10 - $50 Million",
    "Prefer EBITDA Margins Greater than 8%",
    "Prefer Majority Control",
    "Strong Committed Management Team",
    "Significant Opportunities for Growth",
  ];

  return (
    <div>
      <h1>Helping you reach new heights</h1>
      <Section title="Who we are" imageUrl={aboutJpg} buttonLink="about">
        <p>
          Empyrean Investment Group is a leading private equity firm focused on
          the acquisition of family businesses and management buyouts both here
          in the United States and internationally.
        </p>
        <p>
          Empyrean seeks to help companies reach their full potential by
          combining our industry experience, capital and transaction experience
          with proven operating executives. Our proven, pragmatic approach has
          earned us a reputation as a trustworthy steward of capital. Empyrean
          Investment Group has developed a track record of growing businesses
          and providing high returns for its partners.
        </p>
      </Section>
      <Section title="Our team" imageUrl={teamJpg} buttonLink="team">
        <p>
          Empyrean Investment Group has a team of compromised of leading members
          within various industries. With our operating partners having over a
          combined 100 years of experience in mergers and acquisitions and
          senior management experience, we are equipped to help any company meet
          their goals. We have also been leaders of large public companies,
          family businesses, management buyouts and start-ups.
        </p>
      </Section>
      <Section
        title="Investment criteria"
        imageUrl={contactJpg}
        buttonLink="contact"
      >
        <p>Investment Criteria:</p>
        <ul>
          {investmentList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p>Think you meet our criteria? Contact us today!</p>
      </Section>
    </div>
  );
};

export default HomePage;
