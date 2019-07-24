import React, { Component } from "react";
import Destination from "./Destinations";
import { AuthConsumer } from "../auth/Guard";

// const Temp = () => {
//   return (
//     <div>
//       <AuthConsumer>{({ user }) => <Destination user={user} />}}</AuthConsumer>
//     </div>
//   );
// };

// export default Temp;

export class Temp extends Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {({ user }) => <Destination user={user} />}}
        </AuthConsumer>
      </div>
    );
  }
}

export default Temp;
