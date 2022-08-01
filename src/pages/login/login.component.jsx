import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as PasswordIcon } from "../../assets/password.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./login.styles.scss";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login">
        <h2>Login to renterz</h2>
        <div className="form-box">
          <form className="form" onSubmit={this.handleSubmit}>
            <FormInput
              label={`Email Address`}
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              required
            >
              <EmailIcon className="icon" />
            </FormInput>
            <FormInput
              label={`Password`}
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              required
            >
              <PasswordIcon className="icon" />
            </FormInput>
            <CustomButton type="submit" loginbtn>
              Login
            </CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
