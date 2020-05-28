import React, { Component } from "react";
import "../../mixin/main.css";
import "./Register.css";
import { Link } from "react-router-dom";
import Correctfrom from "../../Assets/EmailValidate_check.png";
export default class EmailValidateComplete extends Component {
  render() {
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap" style={{ width: "600px" }}>
              <form className="form">
                <span className="title">驗證成功</span>
                <div style={{ textAlign: "center", display: "block" }}>
                  <img
                    src={Correctfrom}
                    alt="成功"
                    title="Success"
                    style={{ width: "140px" }}
                  />
                </div>
                <div style={{ marginTop: "30px", textAlign: "center" }}>
                  <span>恭喜您驗證成功!</span>
                </div>
                <Link to="/ChangePassword">
                  <div className="list">
                    <button className="login-btn">去修改密碼 </button>
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
//分二個
