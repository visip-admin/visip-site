import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving Navigation Instantaneously",
    text: "Enabled by the moste reliable and quickest observation and analysis techniques with drones.",
  },
  {
    title: "Exploit Effectiveness on the  Factory Floors",
    text: "Productivity monitoring system based on CCTV footage analysis.",
  },
  {
    title: "Realty Evaluator",
    text: "Logically scores the regions all throughout the cities and towns to scout for the best locations for new businesses to open up.",
  },
  {
    title: "Simulatory Environment",
    text: "Precision tracked environments to train simulators for racing, bot-training, automation.",
  },
];

const Features = () => (
  <div className="visip__features section__padding" id="features">
    <div className="visip__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
    </div>
    <div className="visip__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
