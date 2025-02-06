import React from "react";
import missionImage from "./image.png";
import "./index.css";
const url="https://lottiefiles.com/animations/rocket-launched-into-space-r9dJVtVojW";
const Mission = () => {
  return (
    <div className="mission-bg-section">
      <div className="mission-card">
        <div className="top-section">
          <img src={missionImage} alt="mission-image" className="dimensions" />
        </div>
        <div className="bottom-section">
          <div>
            <img src={missionImage} className="gif" />
          </div>
          <div className="description">
            <h1 className="description-heading">Empowering Your Digital Footprint</h1>
            <p className="description-para">
              We are on a mission to empower your digital footprint. Our ethos revolves around harnessing technology's potential to craft bespoke solutions that elevate your digital presence, foster growth, and drive success in an increasingly competitive market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
