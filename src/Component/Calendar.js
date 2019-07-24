import React, { Component } from "react";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Checkbox from "./Checkbox";
import Axios from "axios";

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
        `${process.env.REACT_APP_BACKEND}/api/dates/` + this.state.datesId,
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
        <div className="btn-param">
          <Checkbox handleClick={this.handleClick} />
        </div>
        <div>
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
        <button onClick={() => console.log(this.state.dates)}>
          this.state
        </button>
        <button onClick={() => console.log(this.state.dates.length)}>
          this.state.length
        </button>
      </div>
    );
  }
}

export default Calendar;

// import { Calendar } from "react-calendar";

// class CalendarDest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.state.date_0 = new Date(2019, 10, 1);
//     const yIndex = this.state.date_0.getFullYear();
//     const mIndex = this.state.date_0.getMonth();
//     this.state.date_1 = new Date(yIndex, mIndex + 1);
//     this.state.date_2 = new Date(yIndex, mIndex + 2);
//     this.state.date_3 = new Date(yIndex, mIndex + 3);
//     this.state.date_4 = new Date(yIndex, mIndex + 4);
//     this.state.date_5 = new Date(yIndex, mIndex + 5);
//   }

//   render() {
//     console.log(this.state);

//     return (
//       <div className="calendar-container">
//         <div className="calendar">
//           <Calendar
//             key={0}
//             onChange={this.onChange}
//             activeStartDate={this.state.date_0}
//             selectRange={true}
//           />
//         </div>
//         <div className="calendar">
//           <Calendar
//             key={1}
//             onChange={this.onChange}
//             activeStartDate={this.state.date_1}
//           />
//         </div>
//         <div className="calendar">
//           <Calendar
//             key={2}
//             onChange={this.onChange}
//             activeStartDate={this.state.date_2}
//           />
//         </div>
//         <div className="calendar">
//           <Calendar
//             key={3}
//             onChange={this.onChange}
//             activeStartDate={this.state.date_3}
//           />
//         </div>
//         <div className="calendar">
//           <Calendar
//             key={4}
//             onChange={this.onChange}
//             activeStartDate={this.state.date_4}
//           />
//         </div>
//         <div className="calendar">
//           <Calendar
//             key={5}
//             onChange={this.onChange}
//             activeStartDate={this.state.date_5}
//           />
//         </div>
//       </div>
//     );
//   }
// }
