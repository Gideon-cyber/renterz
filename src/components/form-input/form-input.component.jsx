import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, children, ...otherprops }) => (
  <div>
    <label>{label}</label>
    <div className="form-field">
      <input {...otherprops} />
      {children}
    </div>
  </div>
);

export default FormInput;
