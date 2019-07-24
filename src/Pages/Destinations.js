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

  getAllData = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`)
      .then(res => {
        console.log(res);
        this.setState({
          userResults: res.data.destinations.destinations,
          destinationsId: res.data.destinations._id
        });
      })
      .catch(err => console.log(err));
  };

  handleClick = evt => {
    evt.preventDefault();
    const dataToSend = evt.target.value;

    if (this.state.destinationsId) {
      axios
        .patch(
          `${
            process.env.REACT_APP_BACKEND
          }/api/destinations/updateDestination/${this.state.destinationsId}`,
          { destinations: dataToSend }
        )
        .then(res => {
          this.getAllData();
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/destinations`, {
          destinations: [dataToSend],
          userId: this.props.user.id
        })
        .then(() => this.getAllData());
    }
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`)
      .then(res => {
        if (res.data.destinations) {
          this.setState({
            userResults: res.data.destinations.destinations,
            destinationsId: res.data.destinations._id
          });
        }
      })
      .catch(err => console.log(err));
  }

  handleDelete = index => {
    const userResults = [...this.state.userResults];
    userResults.splice(index, 1);

    axios
      .patch(
        `${process.env.REACT_APP_BACKEND}/api/destinations/deleteDestination/${
          this.state.destinationsId
        }`,
        { destinations: userResults }
      )
      .then(res => {
        console.log(res);
        this.setState({
          userResults
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleTitle = evt => {
    this.setState(
      {
        city: evt.target.value
      },
      () => {
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
          destinationsId={this.state.destinationsId}
        />
        <br />
        <SearchDestination onChange={this.handleTitle} />
        <br />
        <div className="btn-container">
          {this.state.result.slice(0, 10).map((one, index) => {
            return (
              <div key={index} className="destination-container">
                <div className="btn-containee">
                  <ButtonToolbar>
                    <Button
                      variant="outline-primary"
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
