import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { AuthConsumer } from "../auth/Guard";
import Signout from "../auth/Signout";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/destinations">TOP 5 TRIP</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink to="/travel">Travel</NavLink>
            <NavLink to="/holidays">Holidays</NavLink>
            <NavLink to="/destinations">Destinations</NavLink>

            <AuthConsumer>
              {({ loginStatus, signout }) => (
                <React.Fragment>
                  <Signout className="logout" signout={signout} />
                </React.Fragment>
              )}
            </AuthConsumer>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  }
}

export default NavBar;
