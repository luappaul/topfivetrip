import React, { Component } from "react";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Checkbox from "./Checkbox";
import Axios from "axios";
import { Nav } from "react-bootstrap";
import NavBar from "./Navbar";

mobiscroll.settings = {
  lang: "fr",
  theme: "ios"
};

const weekendDate = ["20/07/2019", "21/07/2019"];

class Calendar extends Component {
  state = {
    dates: [],
    clickOne: false,
    clickTwo: false
  };

  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`)
      .then(({ data: user }) => {
        if (user.dates) {
          this.setState(
            { dates: user.dates.dates, datesId: user.dates._id },
            () => console.log(this.state)
          );
        }
      })
      .catch(err => console.log(err));
  }

  handleClick = evt => {
    this.setState({ [evt.target.name]: evt.target.checked }, () => {
      if (this.state.clickOne === true) {
        this.refs.form.instance.setVal(weekendDate);
        this.setState({ date: evt.valueText });
      } else {
        this.refs.form.instance.clear();
      }
    });
  };

  handleEvent = evt => {
    const newArr = evt.valueText.split(",");
    if (this.state.dates.length <= 1 && !this.state.datesId) {
      this.setState({ dates: newArr }, () => {
        Axios.post(`${process.env.REACT_APP_BACKEND}/api/dates`, {
          dates: this.state.dates,
          userId: this.props.user.id
        })
          .then(res => this.setState({ datesId: res.data._id }))
          .catch(err => console.log(err));
      });
    } else {
      this.setState({ dates: newArr });
      Axios.patch(
        `${process.env.REACT_APP_BACKEND}/api/dates/${this.state.datesId}`,
        { dates: this.state.dates }
      )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    let fromMonday = [];
    let fromSaturday = [];
    let twoWeeks = [];

    for (let i = 0; i < 7; i++) {
      fromMonday.push(new Date(2018, 0, 8 + i));
      fromSaturday.push(new Date(2018, 0, 6 + i));
    }

    for (let j = 0; j < 14; j++) {
      twoWeeks.push(new Date(2018, 0, 8 + j));
    }
    return (
      <div>
        <div className="calendar-container">
          <div className="btn-param">
            <Checkbox handleClick={this.handleClick} />
          </div>
          <div className="mobiscroll-container">
            <mobiscroll.Form>
              <div className="mbsc-grid">
                <mobiscroll.FormGroup>
                  <mobiscroll.FormGroupTitle>
                    Pick-Up Your Known Holidays Date
                  </mobiscroll.FormGroupTitle>
                  <mobiscroll.Calendar
                    select="multiple"
                    display="inline"
                    type="hidden"
                    ref="form"
                    onSet={this.handleEvent}
                  />
                </mobiscroll.FormGroup>
              </div>
            </mobiscroll.Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
