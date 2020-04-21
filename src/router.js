import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import ClassList from "./routes/ClassList";
import Loging from "./routes/Loging";
import StudentRegister from "./routes/StudentRegister";
import ClassTeacherRegister from"./routes/ClassTeacherRegister";
import CounselorTeacherRegister from"./routes/CounselorTeacherRegister";
import Getpassword from "./routes/Getpassword";
import ChangePassword from "./routes/ChangePassword";
import EmailValidate from "./routes/EmailValidate";
import EmailValidateError from "./routes/EmailValidateError";
export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/ClassList" exact component={ClassList} />
      <Route path="/Loging" exact component={Loging} />
      <Route path="/StudentRegister" exact component={StudentRegister} />
      <Route path="/ClassTeacherRegister" exact component={ClassTeacherRegister} />
      <Route path="/CounselorTeacherRegister" exact component={CounselorTeacherRegister} />
      <Route path="/Getpassword" exact component={Getpassword} />
      <Route path="/ChangePassword" exact component={ChangePassword} />
      <Route path="/EmailValidate" exact component={EmailValidate} />
      <Route path="/EmailValidateError" exact component={EmailValidateError} />
    </Switch>
  </HashRouter>
);
