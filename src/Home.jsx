import React from "react";
import Header from "./header/index.jsx";
import Mission from "./mission/index.jsx";
import Values from "./values/index.jsx";
import Services from "./services/index.jsx";
import Footer from "./footer/index.jsx";
import "/src/Home.css"

const Home = () => {
  return (
    <div className="bg-section">
      <Header />
      <div className="main-section">
        <div>
          <h1 className="home-heading">
            Welcome To <br/><span className="highlight">CodeTikki</span> IT Solutions
          </h1>
          <p className="home-description">
            At CodeTikki, we are dedicated to redefining possibilities in the realm of technology.
            Our commitment extends beyond delivering mere solutions; we strive to transform challenges into opportunities, empowering businesses and individuals to thrive in the digital age.
          </p>
          <button className="explore-button">Explore</button>
        </div>
        <div>
          <img src="src/a6a4bc4d452e92ab24064c277babf115.png" className="img-dimensions" alt="CodeTikki Banner" />
        </div>
      </div>
      <Mission />
      <Values />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
