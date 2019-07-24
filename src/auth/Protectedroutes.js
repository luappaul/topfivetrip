import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./Guard";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ loginStatus, user }) => (
      <Route
        render={props => {
          return loginStatus ? (
            <Component {...props} user={user} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
