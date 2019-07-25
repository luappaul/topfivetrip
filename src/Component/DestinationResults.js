import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Table } from "react-bootstrap";

class DestinationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationOne: this.props.destinationOne,
      quotesOne: [],
      quotesTwo: [],
      quotesThree: [],
      quotesFour: [],
      quotesFive: [],
      quotesSix: [],
      quotesSeven: [],
      quotesEight: [],
      quotesNine: []
    };
  }

  // static getDerivedStateFromProps(newProp, state) {
  //   console.log("magik 3", newProp);
  //   return null;
  // }

  getData = () => {
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationOne
        }/${moment(this.props.infos.outboundpartialdateOne).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(this.props.inboundpartialdateOne).format(
          "YYYY-MM-DD"
        )}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesOne: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationTwo
        }/${moment(this.props.infos.outboundpartialdateOne).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(this.props.inboundpartialdateOne).format(
          "YYYY-MM-DD"
        )}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesTwo: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationThree
        }/${moment(this.props.infos.outboundpartialdateOne).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(this.props.inboundpartialdateOne).format(
          "YYYY-MM-DD"
        )}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesThree: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationOne
        }/${moment(this.props.infos.outboundpartialdateTwo).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(this.props.inboundpartialdateTwo).format(
          "YYYY-MM-DD"
        )}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesFour: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationTwo
        }/${moment(this.props.infos.outboundpartialdateTwo).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(this.props.inboundpartialdateTwo).format(
          "YYYY-MM-DD"
        )}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesFive: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationThree
        }/${moment(this.props.infos.outboundpartialdateTwo).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(this.props.inboundpartialdateTwo).format(
          "YYYY-MM-DD"
        )}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesSix: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationOne
        }/${moment(this.props.infos.outboundpartialdateThree).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(
          this.props.inboundpartialdateThree
        ).format("YYYY-MM-DD")}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesSeven: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationTwo
        }/${moment(this.props.infos.outboundpartialdateThree).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(
          this.props.inboundpartialdateThree
        ).format("YYYY-MM-DD")}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesEight: MinValue });
      })
      .catch(err => console.log(err));
    axios
      .get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${
          this.props.infos.country
        }/${this.props.infos.currency}/${this.props.infos.locale}/FR/${
          this.props.infos.destinationThree
        }/${moment(this.props.infos.outboundpartialdateThree).format(
          "YYYY-MM-DD"
        )}?inboundpartialdate=${moment(
          this.props.inboundpartialdateThree
        ).format("YYYY-MM-DD")}`,
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
        const quoteValue = result.data.Quotes.map(a => a.MinPrice);
        const MinValue = Math.min.apply(null, quoteValue);
        this.setState({ quotesNine: MinValue });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th />
              <th>{this.props.infos.destinationOne}</th>
              <th>{this.props.infos.destinationTwo}</th>
              <th>{this.props.infos.destinationThree}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                {moment(this.props.infos.inboundpartialdateOne).format(
                  "YYYY-MM-DD"
                )}
              </th>
              <th>{this.state.quotesOne}</th>
              <th>{this.state.quotesTwo}</th>
              <th>{this.state.quotesThree}</th>
            </tr>
            <tr>
              <th>
                {moment(this.props.infos.inboundpartialdateTwo).format(
                  "YYYY-MM-DD"
                )}
              </th>
              <th>{this.state.quotesFour}</th>
              <th>{this.state.quotesFive}</th>
              <th>{this.state.quotesSix}</th>
            </tr>
            <tr>
              <th>
                {moment(this.props.infos.inboundpartialdateThree).format(
                  "YYYY-MM-DD"
                )}
              </th>
              <th>{this.state.quotesSeven}</th>
              <th>{this.state.quotesEight}</th>
              <th>{this.state.quotesNine}</th>
            </tr>
          </tbody>
        </Table>
        <button onClick={this.getData}>click</button>
      </div>
    );
  }
}

export default DestinationResult;
