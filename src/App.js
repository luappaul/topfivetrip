//SETUP
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//CSS
import "./App.css";

//AUTH
import ProtectedRoute from "./auth/Protectedroutes";
import MyFunctionalComponent from "./Pages/MyFunctionalComponent";
//ROUTES
import Travel from "./Pages/Travel";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Holidays from "./Pages/Holidays";
import Location from "./Pages/Location";
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
        <ProtectedRoute path="/location" component={Location} />
        <ProtectedRoute path="/travel" component={Travel} />
        <ProtectedRoute path="/destinations" component={Destinations} />
        )}
      </Switch>
    </div>
  );
}

export default App;
