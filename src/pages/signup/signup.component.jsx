import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import { ReactComponent as PersonIcon } from "../../assets/person.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as PasswordIcon } from "../../assets/password.svg";

import "./signup.styles.scss";

class SignupPage extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      <div className="signupPage">
        <h2>Register on renterz</h2>
        <div className="form-box">
          <form className="form" onSubmit={this.handleSubmit}>
            <FormInput
              label={`Username`}
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              required
            >
              <PersonIcon className="icon" />
            </FormInput>
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              required
            >
              <EmailIcon className="icon" />
            </FormInput>

            <FormInput
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              required
            >
              <PasswordIcon className="icon" />
            </FormInput>
            <FormInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={this.handleChange}
              required
            >
              <PasswordIcon className="icon" />
            </FormInput>
            <CustomButton type="submit" loginbtn>
              SignUp
            </CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupPage;
