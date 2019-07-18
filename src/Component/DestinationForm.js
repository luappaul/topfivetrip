import React, { Component } from "react";
import DestinationResult from "./DestinationResults";
class DestinationForm extends Component {
  constructor(props) {
    super();
    this.state = {
      country: "US",
      currency: "EUR",
      locale: "en-US",
      originPlace: "SFO-sky",
      destinationPlace: "JFK-sky",
      outboundpartialdate: "2019-09-01",
      inboundpartialdate: "2019-12-01",
      readyToLoad: false
    };
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ readyToLoad: true });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Country : </label>
            <input
              name="country"
              id="country"
              type="text"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Currency : </label>
            <input
              name="currency"
              id="currency"
              type="text"
              value={this.state.currency}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Locale : </label>
            <input
              name="locale"
              id="locale"
              type="text"
              value={this.state.locale}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Origin Place : </label>
            <input
              name="originPlace"
              id="originPlace"
              type="text"
              value={this.state.originPlace}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Destination Place : </label>
            <input
              name="destinationPlace"
              id="destinationPlace"
              type="text"
              value={this.state.destinationPlace}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Outbound Partial Date : </label>
            <input
              name="outboundpartialdate"
              id="outboundpartialdate"
              type="text"
              value={this.state.outboundpartialdate}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Inbound Partial Date : </label>
            <input
              name="inboundpartialdate"
              id="inboundpartialdate"
              type="text"
              value={this.state.inboundpartialdate}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
          <br />
          <br />

          {this.state.readyToLoad && <DestinationResult infos={this.state} />}
        </form>
      </div>
    );
  }
}

export default DestinationForm;
