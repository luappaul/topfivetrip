import React, { Component } from "react";
import "./TravelBoard.css";

export class TravelBoard extends Component {
  render() {
    return (
      <div className="travelboard-container">
        <div className="table-destinations">
          <table>
            <thead>
              <tr>
                <th>Destinations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.destinations.map((one, index) => {
                    return <p key={index}>{one}</p>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-dates">
          <table>
            <thead>
              <tr>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.dates.map((one, index) => (
                    <p key={index}>{one}</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TravelBoard;
