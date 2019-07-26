import React, { Component } from "react";
import { InputGroup, Form } from "react-bootstrap";

class SearchDestination extends Component {
  render() {
    return (
      <div className="search-destination">
        <div className="search-engine">
          <InputGroup
            style={{ width: "50vw", margin: "0 auto" }}
            size="lg"
            onChange={evt => this.props.onChange(evt)}
          >
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">
                Find your Dest
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" value={this.props.name} />
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default SearchDestination;
