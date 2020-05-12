import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import ClassList from "./routes/ClassList";
import Loging from "./routes/Loging";
import StudentRegister from "./routes/StudentRegister";
import ClassTeacherRegister from "./routes/ClassTeacherRegister";
import CounselorTeacherRegister from "./routes/CounselorTeacherRegister";
import RegisterComplete from "./routes/RegisterComplete";
import Getpassword from "./routes/Getpassword";
import ChangePassword from "./routes/ChangePassword";
import ChangePasswordComplete from "./routes/ChangePasswordComplete";
import EmailValidate from "./routes/EmailValidate";
import ResendiEmailValidate from "./routes/ResendiEmailValidate";
import RegisterEmailValidate from "./routes/RegisterEmailValidate";
import ResendiRegisterEmailValidate from "./routes/ResendiRegisterEmailValidate";
import Studentdata from "./routes/Studentdata";
import Studentdoc from "./routes/Studentdoc";
import Personal from "./routes/Personal";
import AdminReservation1 from "./routes/AdminReservation1";
import AdminReservation2 from "./routes/AdminReservation2";
import AdminReservation3 from "./routes/AdminReservation3";
import ClassTeacherReservation1 from "./routes/ClassTeacherReservation1";
import ClassTeacherReservation2 from "./routes/ClassTeacherReservation2";
import ClassTeacherReservation3 from "./routes/ClassTeacherReservation3";
import CounselorTeacherReservation2 from "./routes/CounselorTeacherReservation2";
import CounselorTeacherReservation3 from "./routes/CounselorTeacherReservation3";
import StudentReservationStatus from "./routes/StudentReservationStatus";
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
      <Route path="/Loging/RegisterEmailValidate" exact component={RegisterEmailValidate} />
      <Route path="/Loging/ResendiRegisterEmailValidate" exact component={ResendiRegisterEmailValidate} />

      <Route path="/ClassList" exact component={ClassList} />
      <Route path="/Studentdata/:id" exact component={Studentdata} />
      <Route path="/Studentdoc/:id" exact component={Studentdoc} />
      <Route path="/Personal" exact component={Personal} />

      <Route path="/AdminReservation1/:id" exact component={AdminReservation1} />
      <Route path="/AdminReservation2/:id" exact component={AdminReservation2} />
      <Route path="/AdminReservation3/:id" exact component={AdminReservation3} />
      <Route path="/ClassTeacherReservation1/:id" exact component={ClassTeacherReservation1} />
      <Route path="/ClassTeacherReservation2/:id" exact component={ClassTeacherReservation2} />
      <Route path="/ClassTeacherReservation3/:id" exact component={ClassTeacherReservation3} />
      <Route path="/CounselorTeacherReservation2/:id" exact component={CounselorTeacherReservation2} />
      <Route path="/CounselorTeacherReservation3/:id" exact component={CounselorTeacherReservation3} />
      <Route path="/StudentReservationStatus/:id" exact component={StudentReservationStatus} />
      <Route path="/TeacherManagement/:id" exact component={TeacherManagement} />
      <Route path="/TeacherAuthority/:id" exact component={TeacherAuthority} />
      <Route path="/StudentManagement/:id" exact component={StudentManagement} />
    </Switch>
  </HashRouter>
)