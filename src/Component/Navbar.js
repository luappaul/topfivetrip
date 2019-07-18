import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">TOP 5 TRIP</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/param">Param</NavLink>
            <NavLink to="/holidays">Holidays</NavLink>
            <NavLink to="/destinations">Destinations</NavLink>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  }
}

export default NavBar;
