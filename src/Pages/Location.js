import React, { Component } from "react";
import NavBar from "../Component/Navbar";
import axios from "axios";

class Result extends Component {
  state = {
    location: "FR"
  };

  handleClick = evt => {
    this.setState({
      location: evt.target.value
    });
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`,
        {
          location: this.state.location
        }
      )
      .then(res => this.props.history.push("/destinations"))
      .catch(err => console.log(err));
  };

  render() {
    if (!this.props) return null;
    console.log(this.props.history);
    return (
      <div className="location-page">
        <NavBar />
        <div className="location-container">
          <h2>Where are you from ?</h2>
          <div>
            <button value="Paris" onClick={this.handleClick}>
              Paris, France
            </button>
          </div>
          <div>
            <button value="Barcelona" onClick={this.handleClick}>
              Barcelona, Spain
            </button>
          </div>
          <div>
            <button value="London" onClick={this.handleClick}>
              London, UK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
