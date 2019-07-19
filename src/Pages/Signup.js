import React, { Component } from "react";
import APIHandler from "../api/Handler";
import "./Signup.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import logo from "../img/logo.PNG";
import { NavLink } from "react-router-dom";

const apiHandler = new APIHandler();

export default class Signup extends Component {
  state = {
    isPasswordOk: false,
    name: "foo",
    lastname: "bar",
    email: "foo@bar.baz",
    password: "1234",
    passwordConfirm: "1234"
  };

  constructor() {
    super();
    this.avatarRef = React.createRef();
  }

  checkAllFields() {
    return true;
  }

  checkPasswordMatch() {
    const { password, passwordConfirm } = this.state;
    var passed = false;
    if (password && passwordConfirm) passed = password === passwordConfirm;
    else passed = true;
    return passed;
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.checkAllFields()) return console.warn("form incomplete");

    apiHandler
      .post("/signup", this.state)
      .then(serverRes => {
        console.log(this.props);
        this.props.history.push("/destinations");
        console.log(serverRes);
      })
      .catch(serverErr => console.error(serverErr));
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, lastname, email, password, passwordConfirm } = this.state;
    return (
      <div className="top-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <form className="form" onChange={handleChange}>
          <h2 className="title">Let's create your account !</h2>
          <br />
          <br />
          <div>
            <label className="label" htmlFor="name">
              name
            </label>
            <input name="name" id="name" type="text" defaultValue={name} />
          </div>
          <div>
            <label className="label" htmlFor="lastname">
              lastname
            </label>
            <input
              name="lastname"
              id="lastname"
              type="text"
              defaultValue={lastname}
            />
          </div>
          <div>
            <label className="label" htmlFor="email">
              email
            </label>
            <input id="email" name="email" type="text" defaultValue={email} />
          </div>
          <br />
          <br />
          <div>
            <label className="label" htmlFor="password">
              password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              defaultValue={password}
            />
          </div>{" "}
          <div>
            <label className="label" htmlFor="passwordConfirm">
              confirm password
            </label>
            <input
              name="passwordConfirm"
              id="passwordConfirm"
              type="password"
              defaultValue={passwordConfirm}
            />
          </div>
          <ButtonToolbar>
            <Button
              onClick={handleSubmit}
              variant="outline-dark"
              className="btn"
            >
              Sign Up
            </Button>

            <NavLink to="/login">
              <Button variant="outline-dark" className="btn">
                Login
              </Button>
            </NavLink>
          </ButtonToolbar>
        </form>
      </div>
    );
  }
}
