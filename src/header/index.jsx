import React from "react";
import "./index.css";

const Header = () => {
  return (
    <nav className="header-nav">
      <ul className="nav-links">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>PROJECTS</li>
        <li>BLOG</li>
        <li>CONTACT US</li>
      </ul>
      <button className="login-btn">LOG IN</button>
    </nav>
  );
};

export default Header;
