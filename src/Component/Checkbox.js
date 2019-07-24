import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      clickOne: false,
      clickTwo: false
    };
  }

  render() {
    return (
      <div className="checkbox">
        <div className="container">
          <ul className="ks-cboxtags">
            <li>
              <input
                type="checkbox"
                id="checkboxOne"
                value="All Week-end"
                onChange={this.props.handleClick}
                name="clickOne"
              />
              <label className="checkbox-element" htmlFor="checkboxOne">
                All Week-end
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxTwo"
                value="Public Holidays"
                onChange={this.props.handleClick}
                name="clickTwo"
              />
              <label className="checkbox-element" htmlFor="checkboxTwo">
                Public Holidays
              </label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Checkbox;
