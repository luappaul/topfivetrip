import React, { Component } from "react";
import NavBar from "../Component/Navbar";
import axios from "axios";
import "./Location.css";
import { Button, Card, CardDeck } from "react-bootstrap";

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
    return (
      <div className="location-page">
        <h2>Where are you from ?</h2>
        <div className="location-container">
          <CardDeck>
            <Card
              border="info"
              style={{ width: "30rem" }}
              className="city paris"
            >
              <Card.Img
                src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg"
                alt="logo paris"
              />
              <Card.Body>
                <Card.Text>
                  Paris is the capital and most populous city of France. Since
                  the 17th century, Paris has been one of Europe's major centres
                  of finance, diplomacy, as well as the arts.
                </Card.Text>
                <Button value="PARI-sky" onClick={this.handleClick}>
                  Paris, France
                </Button>
              </Card.Body>
            </Card>
            <Card
              border="info"
              style={{ width: "30rem" }}
              className="city barcelona"
            >
              <Card.Img
                src="https://thesefootballtimes.co/wp-content/uploads/2015/11/barcelona1.jpg"
                alt="logo paris"
              />
              <Card.Body>
                <Card.Text>
                  Barcelona is a city in Spain. It is the capital and largest
                  city of the autonomous community of Catalonia, as well as the
                  second most populous municipality of Spain.
                </Card.Text>
                <Button value="BCN-sky" onClick={this.handleClick}>
                  Barcelona, Spain
                </Button>
              </Card.Body>
            </Card>
            <Card
              border="info"
              style={{ width: "30rem" }}
              className="city london"
            >
              <Card.Img
                src="https://www.visitbritain.com/sites/default/files/styles/wysiwyg_image/public/consumer/vb34156199_1100.jpg?itok=8azk9zgC"
                alt="logo paris"
              />
              <Card.Body>
                <Card.Text>
                  London is the capital of England, with the largest municipal
                  population in the European UnionStanding on the River Thames
                  in the south-east of England.
                </Card.Text>
                <Button value="LOND-sky" onClick={this.handleClick}>
                  London, UK
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default Result;
