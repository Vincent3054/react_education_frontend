import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Studentdata from "./routes/Studentdata";
import Personal from "./routes/Personal";

export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/Studentdata/:id" exact component={Studentdata} />
      <Route path="/Personal" exact component={Personal} />
    </Switch>
  </HashRouter>
);
