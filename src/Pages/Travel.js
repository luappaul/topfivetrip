import React from "react";
import NavBar from "../Component/Navbar";
import DestinationForm from "../Component/DestinationForm";
import Axios from "axios";
import TravelBoard from "../Component/TravelBoard";

class Travel extends React.Component {
  state = {
    user: "",
    dates: [],
    destinations: [],
    location: ""
  };

  // static getDerivedStateFromProps(newProp, state) {
  //   console.log("magik 1", newProp);
  //   return null;
  // }

  componentDidMount() {
    if (this.props.user) {
      Axios.get(
        `${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`
      )
        .then(res =>
          this.setState({ destinations: res.data.destinations.destinations })
        )
        .catch(err => console.log(err));
      Axios.get(
        `${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`
      )
        .then(res => this.setState({ dates: res.data.dates.dates }))
        .catch(err => console.log(err));
      Axios.get(
        `${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`
      )
        .then(res => this.setState({ location: res.data.location }))
        .catch(err => console.log(err));
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user) {
      Axios.get(
        `${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`
      )
        .then(res =>
          this.setState({ destinations: res.data.destinations.destinations })
        )
        .catch(err => console.log(err));
      Axios.get(
        `${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`
      )
        .then(res => this.setState({ dates: res.data.dates.dates }))
        .catch(err => console.log(err));
      Axios.get(
        `${process.env.REACT_APP_BACKEND}/api/user/${this.props.user.id}`
      )
        .then(res => this.setState({ location: res.data.location }))
        .catch(err => console.log(err));
    }
  }

  render() {
    if (!this.props.user) return null;
    return (
      <div>
        <NavBar />
        <DestinationForm
          destinations={this.state.destinations}
          dates={this.state.dates}
          location={this.state.location}
        />
      </div>
    );
  }
}

export default Travel;
