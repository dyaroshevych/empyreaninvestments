import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Backdrop } from "../../../UI";

import { arrowRightSvg } from "../../../../assets/img/icons";
import "./Mobile.scss";

const Mobile = ({ links }) => {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const handleNavigationToggle = () => {
    setNavigationVisible(!navigationVisible);
  };

  return (
    <>
      <Backdrop
        isVisible={navigationVisible}
        toggleVisibility={handleNavigationToggle}
      />
      <div className="NavigationMobile">
        <label
          htmlFor="mobile-navigation-button"
          className="NavigationMobile_button"
          onClick={handleNavigationToggle}
        >
          <span />
          <span />
          <span />
        </label>
        <input
          type="radio"
          id="mobile-navigation-button"
          className="NavigationMobile_input"
        />
        <ul
          className="NavigationMobile_list"
          visible={String(navigationVisible)}
        >
          <li
            className="NavigationMobile_exit"
            onClick={handleNavigationToggle}
          >
            <img src={arrowRightSvg} alt="return to page" />
          </li>
          {links.map(({ name, link }) => (
            <li key={link} className="NavigationMobile_linkContainer">
              <Link
                to={link}
                className="NavigationMobile_link"
                onClick={handleNavigationToggle}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Mobile;
