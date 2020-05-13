import React, { Component } from "react";
import "../mixin/main.css";
import "../routes/Register.css";
import { Link } from "react-router-dom";
import Email from "../Assets/email.png";
export default class RegisterComplete extends Component {
  render() {
    return (
      <div className="Register">
        <div className="Register limiter">
          <div className="Register container">
            <div className="Register wrap" style={{ width: "600px" }}>
              <form className="Register form">
                <span className="Register title">驗證信已寄出</span>
                <div style={{ textAlign: "center", display: "block" }}>
                  <img
                    src={Email}
                    alt="錯誤"
                    title="Error"
                    style={{ width: "140px" }}
                  />
                </div>
                <div style={{ marginTop: "30px", textAlign: "center" }}>
                  <span>驗證信已寄出，請去驗證信箱收信。</span>
                </div>
                <Link to="/Loging">
                  <div className="Register list">
                    <button className="Register login-btn">回去登入</button>
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
