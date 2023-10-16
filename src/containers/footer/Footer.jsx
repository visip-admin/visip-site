import React from "react";
import visipLogo from "../../assets/logo2.svg";
import "./footer.css";

const Footer = () => (
  <div className="visip__footer section__padding">
    <div className="visip__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="visip__footer-btn">
      <a href="mailto:contact@visip.in">
        <p>Contact Us Soon</p>
      </a>
    </div>

    <div className="visip__footer-links">
      <div className="visip__footer-links_logo">
        <img src={visipLogo} alt="visip_logo" />
        <p>
          Vision Impossible Solutions <br /> All Rights Reserved
        </p>
      </div>
      <div className="visip__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="visip__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="visip__footer-links_div">
        <h4>Get in touch</h4>
        <a href="tel://+91-996-581-7968/">
          <p>+91-996-581-7968</p>
        </a>
        <a href="mailto:contact@visip.in">
          <p>contact@visip.in</p>
        </a>
      </div>
    </div>

    <div className="visip__footer-copyright">
      <p>@2023 Visip. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
