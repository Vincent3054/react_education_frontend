import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Loging from"./routes/Loging";
import Register from"./routes/Register";
import Getpassword from "./routes/Getpassword";
export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/Loging" exact component={Loging} />
      <Route path="/Register" exact component={Register}/>
      <Route path="/Getpassword" exact component={Getpassword}/>
    </Switch>
  </HashRouter>
);
