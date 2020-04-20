import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Studentdata from "./routes/Studentdata";

export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/Studentdata/:id" exact component={Studentdata} />
    </Switch>
  </HashRouter>
);
