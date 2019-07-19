import React from "react";
import NavBar from "../Component/Navbar";
import DestinationForm from "../Component/DestinationForm";

// import { geolocated } from "react-geolocated";
// import Geocode from "react-geocode";
// Geocode.setApiKey("AIzaSyD0DeMLqoAnFuvMokwgI_xkcN4f_KwuCLg");
// create a geolocated and then geocode the lat /long

class Travel extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <DestinationForm />
      </div>
    );
  }
}

export default Travel;
