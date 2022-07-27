import React from "react";

import Logo from "../../assets/Subtract.png";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div>This is the header component</div>
    <div>
      <img src={Logo} alt="logo" />
    </div>
  </div>
);

export default Header;
