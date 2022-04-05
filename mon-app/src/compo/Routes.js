import React from "react";
import App from "../App";
import { Switch, Route } from "react-router-dom";
import Description from "./Description";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/trailer" component={Description} />
      </Switch>
    </div>
  );
}

export default Routes;
