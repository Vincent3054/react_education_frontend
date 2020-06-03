import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import ClassList from "./routes/ClassList/ClassList";
import Loging from "./routes/Login/Loging";
import StudentRegister from "./routes/Login/StudentRegister";
import ClassTeacherRegister from "./routes/Login/ClassTeacherRegister";
import CounselorTeacherRegister from "./routes/Login/CounselorTeacherRegister";
import RegisterComplete from "./routes/Login/RegisterComplete";
import Getpassword from "./routes/Login/Getpassword";
import ChangePassword from "./routes/Login/ChangePassword";
import ChangePasswordComplete from "./routes/Login/ChangePasswordComplete";
import ResetPassword from "./routes/Login/ResetPassword";
import ResetPasswordComplete from "./routes/Login/ResetPasswordComplete";
import EmailValidateComplete from "./routes/Login/EmailValidateComplete";
import EmailValidateFail from "./routes/Login/EmailValidateFail";
import ResendiEmailValidate from "./routes/Login/ResendiEmailValidate";
import RegisterEmailValidateComplete from "./routes/Login/RegisterEmailValidateComplete";
import RegisterEmailValidateFail from "./routes/Login/RegisterEmailValidateFail";
import ResendiRegisterEmailValidate from "./routes/Login/ResendiRegisterEmailValidate";
import Studentdata from "./routes/Studentdata";
import Studentdoc from "./routes/Studentdoc";
import Personal from "./routes/Personal";
import AdminReservation1 from "./routes/Reservation/AdminReservation1";
import AdminReservation2 from "./routes/Reservation/AdminReservation2";
import AdminReservation3 from "./routes/Reservation/AdminReservation3";
import ClassTeacherReservation1 from "./routes/Reservation/ClassTeacherReservation1";
import ClassTeacherReservation2 from "./routes/Reservation/ClassTeacherReservation2";
import ClassTeacherReservation3 from "./routes/Reservation/ClassTeacherReservation3";
import CounselorTeacherReservation2 from "./routes/Login/CounselorTeacherReservation2";
import CounselorTeacherReservation3 from "./routes/Login/CounselorTeacherReservation3";
import StudentReservationStatus from "./routes/Reservation/StudentReservationStatus";
import TeacherManagement from "./routes/TeacherManagement";
import StudentManagement from "./routes/StudentManagement";
import Coachingrecord from "./routes/ClassList/Coachingrecord";
import CoachingStudent from "./routes/ClassList/CoachingStudent";
import Individual from "./routes/ClassList/Individual";
import IndividualTeach from "./routes/ClassList/IndividualTeach";
import AdminClassList from "./routes/ClassList/AdminClassList";
import AdminCoachingrecord from "./routes/ClassList/AdminCoachingrecord";
import CounselorTeacherClassList from "./routes/ClassList/CounselorTeacherClassList";
import CounselorTeacherCoachingrecord from "./routes/ClassList/CounselorTeacherCoachingrecord";
import ClassTeacherCoachingrecord from "./routes/ClassList/ClassTeacherCoachingrecord";
export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/Loging" exact component={Loging} />
      <Route path="/Register/Student" exact component={StudentRegister} />
      <Route
        path="/Register/ClassTeacher"
        exact
        component={ClassTeacherRegister}
      />
      <Route
        path="/Register/CounselorTeacher"
        exact
        component={CounselorTeacherRegister}
      />
      <Route path="/Register/Complete" exact component={RegisterComplete} />
      <Route path="/Loging/Getpassword" exact component={Getpassword} />
      <Route path="/ResetPassword" exact component={ResetPassword} />
      <Route
        path="/ResetPasswordComplete"
        exact
        component={ResetPasswordComplete}
      />
      <Route path="/ChangePassword" exact component={ChangePassword} />
      <Route
        path="/ChangePasswordComplete"
        exact
        component={ChangePasswordComplete}
      />
      <Route
        path="/EmailValidateComplete"
        exact
        component={EmailValidateComplete}
      />
      <Route path="/EmailValidateFail" exact component={EmailValidateFail} />
      <Route
        path="/ResendiEmailValidate"
        exact
        component={ResendiEmailValidate}
      />
      <Route
        path="/RegisterEmailValidateComplete"
        exact
        component={RegisterEmailValidateComplete}
      />
      <Route
        path="/RegisterEmailValidateFail"
        exact
        component={RegisterEmailValidateFail}
      />
      <Route
        path="/ResendiRegisterEmailValidate"
        exact
        component={ResendiRegisterEmailValidate}
      />

      <Route path="/ClassList" exact component={ClassList} />
      <Route path="/Studentdata/:id" exact component={Studentdata} />
      <Route path="/Studentdoc/:id" exact component={Studentdoc} />
      <Route path="/Personal" exact component={Personal} />

      <Route
        path="/AdminReservation1/:id"
        exact
        component={AdminReservation1}
      />
      <Route
        path="/AdminReservation2/:id"
        exact
        component={AdminReservation2}
      />
      <Route
        path="/AdminReservation3/:id"
        exact
        component={AdminReservation3}
      />
      <Route
        path="/ClassTeacherReservation1/:id"
        exact
        component={ClassTeacherReservation1}
      />
      <Route
        path="/ClassTeacherReservation2/:id"
        exact
        component={ClassTeacherReservation2}
      />
      <Route
        path="/ClassTeacherReservation3/:id"
        exact
        component={ClassTeacherReservation3}
      />
      <Route
        path="/CounselorTeacherReservation2/:id"
        exact
        component={CounselorTeacherReservation2}
      />
      <Route
        path="/CounselorTeacherReservation3/:id"
        exact
        component={CounselorTeacherReservation3}
      />
      <Route
        path="/StudentReservationStatus/:id"
        exact
        component={StudentReservationStatus}
      />
      <Route
        path="/TeacherManagement/:id"
        exact
        component={TeacherManagement}
      />
      <Route
        path="/StudentManagement"
        exact
        component={StudentManagement}
      />
      <Route path="/Coachingrecord/:id" exact component={Coachingrecord} />
      <Route path="/CoachingStudent/:id" exact component={CoachingStudent} />
      <Route path="/Individual/:id" exact component={Individual} />
      <Route path="/IndividualTeach/:id" exact component={IndividualTeach} />
      <Route path="/AdminClassList" exact component={AdminClassList} />
      <Route path="/CounselorTeacherCoachingrecord" exact component={CounselorTeacherCoachingrecord} />
      <Route path="/CounselorTeacherClassList" exact component={CounselorTeacherClassList} />
      <Route path="/ClassTeacherCoachingrecord" exact component={ClassTeacherCoachingrecord} />
      <Route
        path="/AdminCoachingrecord/:id"
        exact
        component={AdminCoachingrecord}
      />
    </Switch>
  </HashRouter>
);
