import React, { Component } from "react";
import { AuthConsumer } from "./../auth/Guard";
import "./Login.css";
import logo from "../img/logo.PNG";

class Login extends Component {
  state = {
    email: "paul.b@numa.co",
    password: "1234"
  };

  handleSubmit = (evt, login) => {
    evt.preventDefault();
    login(status => {
      this.props.history.push("/destinations");
    }, this.state);
  };

  checkAllFieldsFilled() {}

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props.history, "--------------");
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    return (
      <div className="top-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <AuthConsumer>
          {({ login }) => (
            <form
              className="form"
              onSubmit={evt => handleSubmit(evt, login)}
              onChange={handleChange}
            >
              <h1>Login</h1>
              <label htmlFor="email">email</label>
              <input type="email" defaultValue={email} name="email" />
              <label htmlFor="password">password</label>
              <input
                type="text"
                defaultValue={password}
                name="password"
                id="password"
              />
              <br />
              <br />

              <button>Log In</button>
            </form>
          )}
        </AuthConsumer>
      </div>
    );
  }
}

export default Login;
