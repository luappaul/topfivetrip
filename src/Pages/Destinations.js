import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Component/Navbar";
import SearchDestination from "../Component/SearchDestination";

import "./Destinations.css";
import { ButtonToolbar, Button } from "react-bootstrap";
import UserFavoriteDest from "../Component/UserFavoriteDest";

class Destination extends Component {
  state = {
    city: "",
    result: [],
    userResults: []
  };

  handleClick = evt => {
    evt.preventDefault();

    const dataToSend = evt.target.value;
    axios
      .post(`http://localhost:4000/api/destinations`, {
        destinations: dataToSend
      })
      .then(res => {
        axios
          .get("http://localhost:4000/api/destinations")
          .then(res =>
            this.setState({
              userResults: res.data
            })
          )
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/destinations")
      .then(res =>
        this.setState({
          userResults: res.data
        })
      )
      .catch(err => console.log(err));
  }

  handleTitle = evt => {
    this.setState(
      {
        city: evt.target.value
      },
      () => {
        // wait for the load ...
        this.getData();
      }
    );
  };

  getData = () => {
    axios
      .get(`http://localhost:4000/api/cities/${this.state.city}`)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="destination-page">
        <NavBar />
        <br />
        <UserFavoriteDest destinations={this.state.userResults} />
        <br />
        <SearchDestination onChange={this.handleTitle} />
        <br />

        <div className="btn-container">
          {this.state.result.map((one, index) => {
            return (
              <div key={index} className="btn-containee">
                <ButtonToolbar>
                  <Button
                    variant="outline-primary"
                    index={index}
                    value={one.City}
                    onClick={this.handleClick}
                  >
                    {one.City}, {one.IATA}
                  </Button>
                </ButtonToolbar>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Destination;
