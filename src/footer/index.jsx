import React from "react";
import { assets } from "../assets/asset";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <p>Address:</p>
          <p>Street: 870-71, Qutub Road Chowk, Sadar Bazar, Maharashtra</p>
          <p>Email: ashu.sharma@codetikki.in</p>
        </div>
        <div>
          <p>Blog</p>
          <p>Problems</p>
          <p>Tutorial</p>
          <p>Events</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Enter Email" />
          <button className="subscribe-btn">Send</button>
        </div>
      </div>
      <p className="footer-rights">All Rights Reserved</p>
      <div className="footer-bottom">
        <div className="align">
        <div className="social-media">
          <img src={assets.instagram} alt="Instagram" />
          <span>|</span>
          <img src={assets.linkedin} alt="LinkedIn" />
          <span>|</span>
          <img src={assets.facebook} alt="Facebook" />
          <span>|</span>
          <img src={assets.twitter} alt="Twitter" />
        </div>
        <p className="social-media-text">Social Media Handles</p>
      </div>
        </div>
       
    </div>
  );
};

export default Footer;
