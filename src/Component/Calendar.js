import React, { Component } from "react";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

mobiscroll.settings = {
  lang: "fr",
  theme: "ios"
};

class Calendar extends Component {
  state = {
    date: []
  };

  handleEvent = evt => {
    this.setState({
      date: evt.valueText
    });
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

    console.log(this.state);

    return (
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
                onSet={this.handleEvent}
                onChange={this.handleEvent}
              />
            </mobiscroll.FormGroup>
          </div>
        </mobiscroll.Form>
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
