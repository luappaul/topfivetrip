import React from "react";
import NavBar from "../Component/Navbar";
import DestinationForm from "../Component/DestinationForm";
import Axios from "axios";
import TravelBoard from "../Component/TravelBoard";

class Travel extends React.Component {
  state = {
    user: "",
    dates: [],
    destinations: []
  };

  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`)
      .then(res =>
        this.setState({ destinations: res.data.destinations.destinations })
      )
      .catch(err => console.log(err));
    Axios.get(`${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`)
      .then(res => this.setState({ dates: res.data.dates.dates }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar />
        {this.state ? (
          <TravelBoard
            destinations={this.state.destinations}
            dates={this.state.dates}
          />
        ) : (
          console.log("not yet")
        )}
        <DestinationForm />
      </div>
    );
  }
}

export default Travel;
