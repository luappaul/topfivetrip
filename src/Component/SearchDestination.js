import React, { Component } from "react";

class SearchDestination extends Component {
  render() {
    return (
      <div>
        <p>Search your destination</p>
        <div className="search-engine">
          <form onChange={evt => this.props.onChange(evt)}>
            <input type="text" value={this.props.name} />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchDestination;
