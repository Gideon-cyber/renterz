import React from "react";

import { Link } from "react-router-dom";

import Picture from "../../assets/house3.png";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import "./hero.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const Hero = () => (
  <div style={{ backgroundImage: `url(${Picture})` }} className="hero">
    <div className="background">
      <h1>RENTERZ</h1>
      <p>
        Your search for house has come to an end, with RENTERZ you can now check
        houses online, pay online and schedule date to pack in
      </p>
      <Link to="/rent">
        <CustomButton>
          <span>EXPLORE</span>
          <Arrow />
        </CustomButton>
      </Link>
    </div>
    <div className="yellow-box"></div>
  </div>
);

export default Hero;
