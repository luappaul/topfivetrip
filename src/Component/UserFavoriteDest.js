import React, { Component } from "react";
import "./UserFavoriteDest.css";

class UserFavoriteDest extends Component {
  state = {
    destinations: []
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.destinations.includes(props.destinations[0]))
      return props.destinations[0];
    else return null;
  }

  render() {
    console.log(this.state);
    return (
      <div className="destination-result-container">
        {this.props.destinations.map((one, index) => {
          return (
            <div className="destination-result" key={index}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt="img"
                />
              </div>
              <div>{one.destinations.toString()}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserFavoriteDest;
