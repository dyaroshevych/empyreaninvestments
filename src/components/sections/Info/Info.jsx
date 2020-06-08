import React from "react";

import { Wrapper } from "../../../hoc";

import { phoneSvg, mailSvg, locationSvg } from "../../../assets/img/icons";
import "./Info.scss";

const CONTACT_INFO = [
  {
    icon: phoneSvg,
    alt: "phone",
    info: "682-218-9336",
  },
  {
    icon: mailSvg,
    alt: "mail",
    info: "contact@empyreaninvestments.com",
  },
  {
    icon: locationSvg,
    alt: "main office",
    info: "2106 E State Hwy 114 #303, Southlake, TX 76092, USA",
  },
];

const Info = () => (
  <section className="Info">
    <Wrapper className="Info_content">
      <iframe
        className="Info_map"
        title="Our office location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4128.031955764496!2d-97.1181354523987!3d32.94664067772387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd4945b35b763%3A0xd6466a741ec48b19!2zMjEwNiBFIFN0YXRlIEh3eSAxMTQsIFNvdXRobGFrZSwgVFggNzYwOTIsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1591650323508!5m2!1suk!2sua"
        frameBorder="0"
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <div>
        <p>
          If you think that your company meets our criteria and would like to
          speak more, do not hesitate to reach out.
        </p>
        <ul className="Info_list">
          {CONTACT_INFO.map(({ icon, alt, info }) => (
            <li className="Info_item" key={alt}>
              <img className="Info_itemIcon" src={icon} alt={alt} />
              {info}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  </section>
);

export default Info;
