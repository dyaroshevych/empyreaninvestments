import React from "react";

import { Wrapper } from "../../../hoc";

import "./Investment.scss";

const INVESTMENT_CRITERIA = [
  "Company EBITDA: $2 - $5 Million",
  "Company Revenue: $10 - $50 Million",
  "Prefer EBITDA Margins Greater than 8%",
  "Prefer Majority Control",
  "Strong Committed Management Team",
  "Significant Opportunities for Growth",
];

const Investment = () => (
  <section className="Investment">
    <Wrapper className="Investment_content">
      <h2>Investment criteria</h2>
      <ul className="Investment_list">
        {INVESTMENT_CRITERIA.map((item, idx) => (
          <li className="Investment_item" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </Wrapper>
  </section>
);

export default Investment;
