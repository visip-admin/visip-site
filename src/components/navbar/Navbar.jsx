import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="visip__navbar">
      <div className="visip__navbar-links">
        <div className="visip__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="visip__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wvisip">What is Visip?</a>
          </p>
          <p>
            <a href="#features">Library of Tools</a>
          </p>
        </div>
      </div>
      <div className="visip__navbar-sign">
        <a href="mailto:contact@visip.in">
          <button type="button">Contact Us</button>
        </a>
      </div>
      <div className="visip__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="visip__navbar-menu_container scale-up-center">
            <div className="visip__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wvisip">What is Visip?</a>
              </p>

              <p>
                <a href="#features">Tools</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="visip__navbar-menu_container-links-sign">
              <button type="button">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
