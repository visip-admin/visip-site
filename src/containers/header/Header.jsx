import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="visip__header section__padding" id="home">
    <div className="visip__header-content">
      <h1 className="gradient__text">
        Let&apos;s Make Data Driven Decisions with Visip
      </h1>
      <p>
        Harness the power of Computer Vision, analyze countless hours of
        footages from security cameras to make the right decisions for your
        business. Be it scouting for a new location for your next shop, or
        monitoring employees' usage of protective equipment such as helmets and
        masks, you name it, Visip will aid you.
      </p>
    </div>

    <div className="visip__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
