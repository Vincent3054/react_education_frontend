import React, { Component } from "react";
import axios from "axios";
import "../../mixin/main.css";
import "./Register.css";
import { Link } from "react-router-dom";
export default class ResendiEmailValidate extends Component {
  state = {
    Account: "",
    Email: "",
  };
  handleSubmit = (e) => {
    const {
      Account,
      Email,
    } = this.state;
    const payload = {
      Account,
      Email,
    };
    if (
      Account === "" ||
      Email === ""
    ) {
      alert("欄位不可空白");
    }  else {
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Login`, payload)
        .then((res) => {
          console.log(res);
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
    const{Account,Email}=this.state;
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap" style={{ width: "600px" }}>
              <form className="form" onSubmit={this.handleSubmit}>
                <span className="title">重寄驗證信</span>
                <span>請重新填寫您的帳號和Email，以重寄認證信：</span>
                <div className="list">
                  <span className="list-text">帳號</span>
                  <input className="input" type="text"  onChange={(e) => {
                    this.setState({ Account: e.target.value });
                  }}
                  value={Account}/>
                </div>
                <div className="list">
                  <span className="list-text">電子信箱</span>
                  <input className="input" type="mail"  onChange={(e) => {
                    this.setState({ Email: e.target.value });
                  }}
                  value={Email}/>
                </div>
                <Link to="/Loging/EmailValidate">
                  <div className="list">
                    <button className="login-btn">送出</button>
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
