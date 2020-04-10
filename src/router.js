import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";

export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
    </Switch>
  </HashRouter>
);
