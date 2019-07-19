import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.PNG";
import "./Homepage.css";
import { Button, ButtonToolbar } from "react-bootstrap";

class Homepage extends Component {
  render() {
    return (
      <div className="top-container">
        <div className="sub-container">
          <div className="logo">
            <img src={logo} alt="logo" className="responsive" />
          </div>

          <div className="baseline">
            <h3>
              Imagine... Booking your next trip at the best possible price in as
              many clicks as your last Amazon purchase
            </h3>
          </div>
          <br />
          <div className="direction-container">
            <ButtonToolbar className="directions">
              <NavLink to="/signup">
                <Button variant="outline-dark" className="btn">
                  SIGN UP
                </Button>
              </NavLink>
              <NavLink to="/login">
                <Button variant="outline-dark" className="btn">
                  LOGIN
                </Button>
              </NavLink>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
