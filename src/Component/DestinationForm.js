import React, { Component } from "react";
import DestinationResult from "./DestinationResults";
import moment from "moment";

class DestinationForm extends Component {
  constructor(props) {
    super();
    this.state = {
      country: "FR",
      currency: "EUR",
      locale: "fr-FR",
      originPlace: "",
      destinationOne: "",
      destinationTwo: "",
      destinationThree: "",
      outboundpartialdateOne: "",
      outboundpartialdateTwo: "",
      outboundpartialdateThree: "",
      inboundpartialdateOne: "",
      inboundpartialdateTwo: "",
      inboundpartialdateThree: ""
    };
  }

  // static getDerivedStateFromProps(newProp, state) {
  //   console.log("magik 2", newProp);
  //   return null;
  // }

  UNSAFE_componentWillReceiveProps() {
    console.log("UNSAFE");
    if (this.props.destinations.includes("New York")) {
      this.setState({ destinationOne: "NYCA-sky" });
    }
    if (this.props.destinations.includes("Barcelona")) {
      this.setState({ destinationTwo: "BCN-sky" });
    }
    if (this.props.destinations.includes("London")) {
      this.setState({ destinationThree: "LOND-sky" });
    }
    if (this.props.dates.length > 1) {
      const dateOne = new Date(
        this.props.dates[0].slice(-4),
        this.props.dates[0].slice(3, 5),
        this.props.dates[0].slice(0, 2)
      );
      this.setState({ outboundpartialdateOne: dateOne });
      const dateTwo = new Date(
        this.props.dates[1].slice(-4),
        this.props.dates[1].slice(4, 6),
        this.props.dates[1].slice(1, 3)
      );
      this.setState({ outboundpartialdateTwo: dateTwo });
      const datethree = new Date(
        this.props.dates[2].slice(-4),
        this.props.dates[2].slice(4, 6),
        this.props.dates[2].slice(1, 3)
      );
      this.setState({ outboundpartialdateThree: datethree });

      const newDateOne = moment(dateOne).add(3, "d");
      this.setState({ inboundpartialdateOne: newDateOne._d });

      const newDateTwo = moment(dateTwo).add(3, "d");
      this.setState({ inboundpartialdateTwo: newDateTwo._d });

      const newDateThree = moment(datethree).add(3, "d");
      this.setState({ inboundpartialdateThree: newDateThree._d });
      this.setState({ originPlace: this.props.location });
    }
  }

  render() {
    return (
      <div>
        <DestinationResult infos={this.state} />
      </div>
    );
  }
}

export default DestinationForm;
