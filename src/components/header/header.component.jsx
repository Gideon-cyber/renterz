import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/Subtract.png";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/rent">
          Rent
        </Link>
        <Link className="option" to="/about">
          About Us
        </Link>
      </div>
      <div className="sign-up">
        <Link className="option" to="/login">
          Login
        </Link>
        <Link className="option" to="/signup">
          Signup
        </Link>
      </div>
    </div>
    <div className="text">
      Get 50% off on your first rent when you use the promocode RENTERZ
    </div>
  </div>
);

export default Header;
