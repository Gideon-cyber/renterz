import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./preview.styles.scss";

const Preview = ({ image, header, span, cta, invert, add }) => (
  <div className={`${invert ? "invert" : ""} ${add ? "add" : ""} preview`}>
    {add ? (
      <div className="new-text">
        <span>Get</span>
        <h4>50%</h4>
        <span>off on your first RENT</span>
        <div className="gold-bar"></div>
      </div>
    ) : (
      ""
    )}
    <div style={{ backgroundImage: `url(${image})` }} className="image"></div>
    <div className="text">
      <div className="gold-bar"></div>
      <h2>{header}</h2>
      <span>{span}</span>
      <Link to="/rent">
        <CustomButton>{cta}</CustomButton>
      </Link>
    </div>
  </div>
);

export default Preview;
