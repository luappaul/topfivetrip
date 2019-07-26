import React, { Component } from "react";
import { AuthConsumer } from "./../auth/Guard";
import "./Login.css";
import logo from "../img/logo.PNG";
import { Button, ButtonToolbar, Form, Col, FormLabel } from "react-bootstrap";

class Login extends Component {
  state = {
    email: "paul.b@numa.co",
    password: "1234"
  };

  handleSubmit = (evt, login) => {
    evt.preventDefault();
    login(status => {
      this.props.history.push("/location");
    }, this.state);
  };

  checkAllFieldsFilled() {}

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    return (
      <div className="top-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <AuthConsumer>
          {({ login }) => (
            <Form
              className="form"
              onSubmit={evt => handleSubmit(evt, login)}
              onChange={handleChange}
            >
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label htmlFor="email">email</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={email}
                    name="email"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label htmlFor="password">password</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={password}
                    name="password"
                    id="password"
                  />
                </Form.Group>
              </Form.Row>
              <br />
              <br />
              <Button
                variant="outline-dark"
                className="btn"
                onClick={evt => handleSubmit(evt, login)}
              >
                Log In
              </Button>
            </Form>
          )}
        </AuthConsumer>
      </div>
    );
  }
}

export default Login;
