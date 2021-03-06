import React from "react";
import "../App";
import { withRouter } from "react-router-dom";

import axios from "axios";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  myfech() {
    return `http://localhost:5000/login`;
  }
  submitHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(this.myfech(), this.state)

      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.props.history.push("Showdata");
        }
      })
      .catch((error) => {
        if (error) {
          console.log("password Or Email it's not correct ");
        }
        console.log("dcndeckncncn", error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.submitHandle}>
        <label htmlFor="EmailLogin">Email</label>
        <br />
        <input
          name="email"
          id="EmailLogin"
          required="required"
          type="email"
          value={email}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label htmlFor="yourLoginPassword"> your password</label>
        <br />
        <input
          type="password"
          id="yourLoginPassword"
          required="required"
          name="password"
          value={password}
          onChange={this.changeHandle}
        ></input>
        <br />
        <button type="submit">Logo in</button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
