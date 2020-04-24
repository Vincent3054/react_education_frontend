import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import StudentReservation from "./routes/StudentReservation";
import StudentReservationComplete from "./routes/StudentReservationComplete";
import ClassList from "./routes/ClassList";
import Loging from "./routes/Loging";
import StudentRegister from "./routes/StudentRegister";
import ClassTeacherRegister from "./routes/ClassTeacherRegister";
import CounselorTeacherRegister from "./routes/CounselorTeacherRegister";
import Getpassword from "./routes/Getpassword";
import ChangePassword from "./routes/ChangePassword";
import ChangePasswordComplete from "./routes/ChangePasswordComplete";
import EmailValidate from "./routes/EmailValidate";
import EmailValidateError from "./routes/EmailValidateError";
import ShigeyoriEmailValidate from "./routes/ShigeyoriEmailValidate";
import Studentdata from "./routes/Studentdata";
import Personal from "./routes/Personal";
import TeacherManagement from "./routes/TeacherManagement"
export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/Loging" exact component={Loging} />
      <Route path="/StudentRegister" exact component={StudentRegister} />
      <Route path="/ClassTeacherRegister" exact component={ClassTeacherRegister} />
      <Route path="/CounselorTeacherRegister" exact component={CounselorTeacherRegister} />
      <Route path="/Getpassword" exact component={Getpassword} />
      <Route path="/ChangePassword" exact component={ChangePassword} />
      <Route path="/ChangePasswordComplete" exact component={ChangePasswordComplete} />
      <Route path="/EmailValidate" exact component={EmailValidate} />
      <Route path="/EmailValidateError" exact component={EmailValidateError} />
      <Route path="/ShigeyoriEmailValidate" exact component={ShigeyoriEmailValidate} />
      <Route path="/ClassList" exact component={ClassList} />
      <Route path="/StudentReservation" exact component={StudentReservation} />
      <Route path="/StudentReservationComplete" exact component={StudentReservationComplete} />
      <Route path="/Studentdata/:id" exact component={Studentdata} />
      <Route path="/Personal" exact component={Personal} />
      <Route path="/TeacherManagement" exact component={TeacherManagement}/>
    </Switch>
  </HashRouter>
)