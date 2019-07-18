import React, { Component } from "react";
import axios from "axios";

class DestinationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      places: [],
      carriers: [],
      currencies: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.locale}/${
          this.props.infos.originPlace
        }/${this.props.infos.destinationPlace}/${
          this.props.infos.outboundpartialdate
        }?inboundpartialdate=${this.props.inboundpartialdate}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "78aa2f391cmsh98fc084e7095100p125dafjsne8260e4cbe34",
            "X-RapidAPI-Host":
              "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
          }
        }
      )
      .then(result => {
        this.setState({
          quotes: result.data.Quotes,
          places: result.data.Places,
          carriers: result.data.Carriers,
          currencies: result.data.Currencies
        });
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Quotes</h1>

        {this.state.quotes.map((ev, index) => {
          return <div index={index}>{ev.MinPrice}</div>;
        })}
      </div>
    );
  }
}

export default DestinationResult;
