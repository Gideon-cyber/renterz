import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, loginbtn, ...otherprops }) => (
  <button className={`${loginbtn ? "loginbtn" : ""} explore`} {...otherprops}>
    {children}
    {/**/}
  </button>
);

export default CustomButton;
