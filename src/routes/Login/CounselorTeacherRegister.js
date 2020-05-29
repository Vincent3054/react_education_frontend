import React, { Component } from "react";
import axios from "axios";
import "../../mixin/main.css";
import "./Register.css";
export default class CounselorTeacherRegister extends Component {
  state = {
    Account: "",
    Name: "",
    Password: "",
    PasswordCheck: "",
    Email: "",
    Phone: "",
    Sex: "",
    Class_Id: "",
    Role_Id: "R002",
  };
  handleSubmit = (e) => {
    const {
      Account,
      Name,
      Password,
      PasswordCheck,
      Email,
      Phone,
      Sex,
      Class_Id,
      Role_Id,
    } = this.state;
    const payload = {
      Account,
      Name,
      Password,
      PasswordCheck,
      Email,
      Phone,
      Sex,
      Class_Id,
      Role_Id,
    };
    if (
      Account === "" ||
      Password === "" ||
      PasswordCheck === "" ||
      Name === "" ||
      Email === "" ||
      Phone === "" ||
      Class_Id === "" ||
      Sex === ""
    ) {
      alert("欄位不可空白");
    } else if (Password !== PasswordCheck) {
      alert("確認密碼錯誤");
    } else {
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Members`, payload)
        .then((res) => {
          console.log(res.data);
          alert(res.data.Message);
          localStorage.setItem("Token", JSON.stringify(res.data.Data.Token));
          this.props.history.push("/Register/Complete");
        })
        .catch((error) => {
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status);
          const err = JSON.parse(error.request.response);
          //錯誤訊息
          alert(err.Message);
        });
    }
  };
  render() {
    const { Account, Name, Password, PasswordCheck, Email, Phone } = this.state;
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap">
              <form className="form" onSubmit={this.handleSubmit}>
                <span className="title">輔導老師註冊</span>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">性別</span>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={(e) => {
                      this.setState({ Sex: e.target.value });
                    }}
                  />
                  <label for="male">男</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    onChange={(e) => {
                      this.setState({ Sex: e.target.value });
                    }}
                  />
                  <label for="female">女</label>
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">真實姓名</span>
                  <input
                    className="input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                    value={Name}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">帳號</span>
                  <input
                    className="input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ Account: e.target.value });
                    }}
                    value={Account}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">密碼</span>
                  <input
                    className="input"
                    type="password"
                    onChange={(e) => {
                      this.setState({ Password: e.target.value });
                    }}
                    value={Password}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">確認密碼</span>
                  <input
                    className="input"
                    type="password"
                    onChange={(e) => {
                      this.setState({ PasswordCheck: e.target.value });
                    }}
                    value={PasswordCheck}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">電子信箱</span>
                  <input
                    className="input"
                    type="email"
                    onChange={(e) => {
                      this.setState({ Email: e.target.value });
                    }}
                    value={Email}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">連絡電話</span>
                  <input
                    className="input"
                    type="tel"
                    onChange={(e) => {
                      this.setState({ Phone: e.target.value });
                    }}
                    value={Phone}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">班級代號</span>
                  <select
                    className="input"
                    onChange={(e) => {
                      this.setState({ Class_Id: e.target.value });
                    }}
                    value={this.state.Class_Id}
                  >
                    <option></option>
                    <option value="C101">C101</option>
                    <option value="C102">C102</option>
                    <option value="C103">C103</option>
                    <option value="C104">C104</option>
                    <option value="C105">C105</option>
                    <option value="C106">C106</option>
                    <option value="C107">C107</option>
                    <option value="C108">C108</option>
                    <option value="C109">C109</option>
                    <option value="C110">C110</option>
                  </select>
                </div>
                <div className="list">
                  <button className="login-btn">註冊</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//<Link to="/Loging/Register/Complete"> </Link>
