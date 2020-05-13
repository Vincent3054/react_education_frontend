import React, { Component } from "react";
import "../mixin/main.css";
import "../routes/Register.css";
import { Link } from "react-router-dom";
export default class CounselorTeacherRegister extends Component {
  render() {
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap">
              <form className="form">
                <span className="title">輔導老師註冊</span>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">性別</span>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label for="male">男</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label for="female">女</label>
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">真實姓名</span>
                  <input className="input" type="text" />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">帳號</span>
                  <input className="input" type="text" />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">密碼</span>
                  <input className="input" type="password" />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">電子信箱</span>
                  <input className="input" type="email" />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">連絡電話</span>
                  <input className="input" type="tel" />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">班級代號</span>
                  <select className="input">
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
                  <span className="red-dot">*</span>
                  <span className="list-text">班級</span>
                  <select className="input">
                    <option value="資訊班">資訊班</option>
                    <option value="藝術班">資訊班</option>
                    <option value="普通班">普通班</option>
                    <option value="A班">A班</option>
                    <option value="B班">B班</option>
                    <option value="C班">C班</option>
                    <option value="D班">D班</option>
                  </select>
                </div>
                <Link to="/Loging/Register/Complete">
                  <div className="list">
                    <button className="login-btn">註冊</button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
