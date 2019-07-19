//SETUP
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//CSS
import "./App.css";

//AUTH
import ProtectedRoute from "./auth/Protectedroutes";

//ROUTES
import Travel from "./Pages/Travel";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Holidays from "./Pages/Holidays";
import Param from "./Pages/Param";
import Result from "./Pages/Result";
import Destinations from "./Pages/Destinations";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/homepage" />
        <Route path="/homepage" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute path="/holidays" component={Holidays} />
        <ProtectedRoute path="/param" component={Param} />
        <ProtectedRoute path="/result" component={Result} />
        <ProtectedRoute path="/destinations" component={Destinations} />
        <ProtectedRoute path="/travel" component={Travel} />
      </Switch>
    </div>
  );
}

export default App;
