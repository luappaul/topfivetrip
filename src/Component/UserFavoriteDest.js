import "./UserFavoriteDest.css";
import { Button, Card, CardDeck, Badge } from "react-bootstrap";

import React from "react";

const UserFavoriteDest = ({ destinations, handleDelete }) => {
  return (
    <CardDeck className="destination-result-container">
      {destinations &&
        destinations.map((one, index) => {
          return (
            <Card
              border="info"
              style={{ width: "10vw", height: "20vh", margin: "2vw" }}
              className="destination-result"
              key={index}
            >
              <Card.Img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="img"
              />
              <Card.Body>
                <Card.Text>
                  {one + " "}
                  <Badge
                    variant="secondary"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </CardDeck>
  );
};

export default UserFavoriteDest;
