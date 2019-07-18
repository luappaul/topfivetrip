import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Holidays from "./Pages/Holidays";
import { Switch, Route, Redirect } from "react-router-dom";
import Param from "./Pages/Param";
import Result from "./Pages/Result";
import Destinations from "./Pages/Destinations";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/holidays" component={Holidays} />
        <Route path="/param" component={Param} />
        <Route path="/result" component={Result} />
        <Route path="/destinations" component={Destinations} />
      </Switch>
    </div>
  );
}

export default App;
