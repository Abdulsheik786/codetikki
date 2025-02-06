import React from "react";
import imgUrl from "./image.png";
import "./index.css";

const Values = () => {
  return (
    <div className="values-bg-section">
    

      <div className="values-card">
        <img src={imgUrl} className="values-image" alt="Values" /> 
        <p className="values-description">Excellence. Innovation. Integrity.</p>
        <p className="values-para">
          Our values serve as the cornerstone of our operations. We pursue 
          excellence relentlessly, innovating at every step to create solutions 
          that transcend expectations. Integrity underscores our work ethic—
          we prioritize transparency and trust in every interaction.
        </p>
      </div>
  
    </div>
  );
};

export default Values;
