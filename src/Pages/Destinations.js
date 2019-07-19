import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Component/Navbar";
import SearchDestination from "../Component/SearchDestination";
import barcelona from "../img/barcelona.jpg";

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
      .post(`${process.env.REACT_APP_BACKEND}/api/destinations`, {
        destinations: dataToSend
      })
      .then(res => {
        axios
          .get(`${process.env.REACT_APP_BACKEND}/api/destinations`)
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
      .get(`${process.env.REACT_APP_BACKEND}/api/destinations`)
      .then(res =>
        this.setState({
          userResults: res.data
        })
      )
      .catch(err => console.log(err));
  }

  handleDelete = id => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/api/destinations/` + id)
      .then(res => {
        const filtered = this.state.userResults.filter(dest => {
          console.log(dest._id, id);
          return dest._id !== id;
        });
        this.setState({ userResults: filtered });
      })
      .catch(err => console.log(err));
  };

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
      .get(`${process.env.REACT_APP_BACKEND}/api/cities/${this.state.city}`)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="destination-page">
        <NavBar />
        <br />
        <UserFavoriteDest
          destinations={this.state.userResults}
          handleDelete={this.handleDelete}
        />
        <br />
        <SearchDestination onChange={this.handleTitle} />
        <br />

        <div className="btn-container">
          {this.state.result.slice(0, 10).map((one, index) => {
            return (
              <div className="destination-container">
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
                  <div className="dest-icon">
                    <img src={barcelona} alt="logo" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Destination;
