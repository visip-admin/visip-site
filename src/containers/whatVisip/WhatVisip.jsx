import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatVisip.css";

const WhatVisip = () => (
  <div className="visip__whatvisip section__margin" id="wvisip">
    <div className="visip__whatvisip-feature">
      <Feature
        title="What is Visip"
        text="We provide Cloud based AI as Services to the industries in the domains of low altitude mapping, virtual reality data aggregators. We also provide tools to monitor
        the dynamics of people and vehicles to avoid congestion and accidents."
      />
    </div>
    <div className="visip__whatvisip-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="visip__whatvisip-container">
      <Feature
        title="Smart Maps"
        text="With drone aided periodic mapping, Visip helps find the minute changes in details at the earliest; 
        anything ranging from a new store opening, all the way till the changes in roadside signboards."
      />
      <Feature
        title="Virtual Environments"
        text="For immersive art using real life virtual enviroments such as movies using minimalist CGI, a realistic 
        environment that captures the continually changing characteristics are of paramount artistic and commercial value."
      />
      <Feature
        title="Workplace Monitoring"
        text="Leveraging our expertise in Computer Vision, we help the modern workplaces be equipped with the best tools to ensure the safety of 
        the employees working under hazardous condition."
      />
    </div>
  </div>
);

export default WhatVisip;
