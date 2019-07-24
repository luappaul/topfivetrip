import React, { Component } from "react";
import { AuthConsumer } from "../auth/Guard";
import Destination from "../Pages/Destinations";
export class MyFunctionalComponent extends Component {
  render() {
    return (
      <div>
        <AuthConsumer>{({ user }) => <Destination user={user} />}</AuthConsumer>
      </div>
    );
  }
}

export default MyFunctionalComponent;
