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
import RegisterComplete from"./routes/RegisterComplete";
import Getpassword from "./routes/Getpassword";
import ChangePassword from "./routes/ChangePassword";
import ChangePasswordComplete from "./routes/ChangePasswordComplete";
import EmailValidate from "./routes/EmailValidate";
import ResendiEmailValidate from "./routes/ResendiEmailValidate";
import Studentdata from "./routes/Studentdata";
import Personal from "./routes/Personal";
import TeacherManagement from "./routes/TeacherManagement";
import TeacherAuthority from "./routes/TeacherAuthority";
import StudentManagement from "./routes/StudentManagement";
export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/Loging" exact component={Loging} />
      <Route path="/Loging/Register/Student" exact component={StudentRegister} />
      <Route path="/Loging/Register/ClassTeacher" exact component={ClassTeacherRegister} />
      <Route path="/Loging/Register/CounselorTeacher" exact component={CounselorTeacherRegister} />
      <Route path="/Loging/Register/Complete" exact component={RegisterComplete} />
      <Route path="/Loging/Getpassword" exact component={Getpassword} />
      <Route path="/Loging/ChangePassword" exact component={ChangePassword} />
      <Route path="/Loging/ChangePasswordComplete" exact component={ChangePasswordComplete} />
      <Route path="/Loging/EmailValidate" exact component={EmailValidate} />
      <Route path="/Loging/ResendiEmailValidate" exact component={ResendiEmailValidate} />
      
      <Route path="/ClassList" exact component={ClassList} />
      <Route path="/StudentReservation" exact component={StudentReservation} />
      <Route path="/StudentReservationComplete" exact component={StudentReservationComplete} />
      <Route path="/Studentdata/:id" exact component={Studentdata} />
      <Route path="/Personal" exact component={Personal} />
      <Route path="/TeacherManagement/:id" exact component={TeacherManagement} />
      <Route path="/TeacherAuthority/:id" exact component={TeacherAuthority} />
      <Route path="/StudentManagement/:id" exact component={StudentManagement} />
    </Switch>
  </HashRouter>
)