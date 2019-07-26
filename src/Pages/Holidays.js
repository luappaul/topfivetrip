import React, { Component } from "react";
import NavBar from "../Component/Navbar";
import Calendar from "../Component/Calendar";
import { AuthConsumer } from "../auth/Guard";
import "./Holidays.css";
import { Button } from "react-bootstrap";

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
    if (!this.props.user) return null;
    return (
      <div className="calendar-page">
        <NavBar />
        <div className="calendar">
          <AuthConsumer>{({ user }) => <Calendar user={user} />}</AuthConsumer>
          <Button onClick={() => this.props.history.push("/travel")}>
            submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Holidays;
