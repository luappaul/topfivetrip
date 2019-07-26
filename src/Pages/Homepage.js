import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.PNG";
import "./Homepage.css";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="all-page">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" className="responsive" />
        </div>
        <div className="direction-container">
          <ButtonToolbar className="directions">
            <NavLink to="/signup">
              <Button variant="outline-dark" className="btn">
                SIGN UP
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button variant="outline-dark" className="btn">
                LOGIN
              </Button>
            </NavLink>
          </ButtonToolbar>
        </div>
      </div>
      <div className="mid-container">
        <div className="baseline">
          <h3>
            Imagine... <br /> Booking your next trip at the best possible price{" "}
            <br /> in as many clicks as your last Amazon purchase
          </h3>
          <Button variant="outline-dark" onClick={handleShow}>
            How does it work
          </Button>
        </div>
        <div className="video">
          <video autoPlay muted loop>
            <source
              src="https://res.cloudinary.com/dfbmzsyx7/video/upload/v1563122303/There_app/coverr-waves-and-sand-1561484040281_xtzyrz.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dfbmzsyx7/video/upload/v1563122303/There_app/coverr-waves-and-sand-1561484040281_xtzyrz.mp4"
              type="video/ogg"
            />
          </video>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>How does it work</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            1/ Set a personalized destination list <br />
            2/ Set the constraints and preferences <br />
            3/ Get your destinations table to make smart choices
          </Modal.Body>
        </Modal>
      </div>

      <br />
    </div>
  );
};

export default Homepage;
