import React, { Component } from "react";
import axios from "axios";
import SearchDestination from "../Component/SearchDestination";
import barcelona from "../img/barcelona.jpg";

import "./Destinations.css";
import { ButtonToolbar, Button, Card, CardDeck } from "react-bootstrap";
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
    if (this.props.user) {
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
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user) {
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
    if (!this.props.user) return null;
    return (
      <div className="destination-page">
        <div className="user-faborite-dest">
          <UserFavoriteDest
            destinations={this.state.userResults}
            handleDelete={this.handleDelete}
            destinationsId={this.state.destinationsId}
          />
        </div>
        <div className="search-destination">
          <SearchDestination onChange={this.handleTitle} />
          <Button
            variant="outline-dark"
            style={{ width: "50vw" }}
            onClick={() => this.props.history.push("/holidays")}
          >
            submit
          </Button>
        </div>
        <div className="btn-container">
          {this.state.result.slice(0, 10).map((one, index) => {
            return (
              <Card
                style={{ width: "25vw", margin: "2vw" }}
                key={index}
                className="destination-container"
              >
                <ButtonToolbar>
                  <Button
                    variant="outline-dark"
                    value={one.City}
                    onClick={this.handleClick}
                  >
                    {one.City}, {one.IATA}
                  </Button>
                </ButtonToolbar>

                <Card.Img src={barcelona} alt="logo" />
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Destination;
