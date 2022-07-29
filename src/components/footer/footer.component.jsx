import React from "react";

import { Link } from "react-router-dom";

import "./footer.styles.scss";

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="info">
            <h3>RENTERZ</h3>
            <span>
              Terminating Homelesness by providing affordable homes for users
            </span>{" "}
            <br />
            <span>
              No, 1 Adebayo street, off Governor’s Estste, Abuja, Nigeria
            </span>
          </div>
          <div className="links">
            <h3>RENTERZ</h3>
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
              <Link className="option" to="/login">
                Login
              </Link>
              <Link className="option" to="/signup">
                Signup
              </Link>
            </div>
          </div>

          <div className="forms">
            <span>Get Updates on New Houses</span>
            <br />
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <input className="form-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
