import React, { Component } from "react";
import NavBar from "../Component/Navbar";
import Calendar from "../Component/Calendar";
import { AuthConsumer } from "../auth/Guard";
import "./Holidays.css";

class Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    };
  }

  handleClick = evt => {
    console.log(evt);
    // this.setState({

    // })
  };

  render() {
    return (
      <div className="destination-page">
        <NavBar />
        <div className="calendar">
          <AuthConsumer>{({ user }) => <Calendar user={user} />}</AuthConsumer>
        </div>
      </div>
    );
  }
}

export default Holidays;
