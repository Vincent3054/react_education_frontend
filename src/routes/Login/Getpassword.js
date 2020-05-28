import React, { Component } from "react";
import axios from "axios";
import "../../mixin/main.css";
import "./Register.css";
export default class Getpassword extends Component {
  state = {
    Account: "",
    Email: "",
  };
  handleSubmit = (e) => {
    const { Account, Email } = this.state;
    const payload = {
      Account,
      Email,
    };
    if (Account === "" || Email === "") {
      alert("帳號或信箱不可空白");
    } else {
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Login`, payload)
        .then((res) => {
          console.log(res.data);
          alert(res.data.Message);
          // this.props.history.push("/Loging/RegisterEmailValidate");
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
    const { Account, Email } = this.state;
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap" style={{ width: "600px" }}>
              <form className="form" onSubmit={this.handleSubmit}>
                <span className="title">找回密碼</span>
                <span>請填寫你註冊時所認證的帳號和Email，以查詢密碼：</span>
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
                  <button className="login-btn">查詢</button>
                </div>
                <hr></hr>
                <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                  <span>
                    查詢結果會將您的帳號與密碼，寄至你填寫的Email信箱，請在5分鐘內，點擊Email中的網址來找回密碼。
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
