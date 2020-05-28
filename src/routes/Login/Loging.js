import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../mixin/main.css";
import "./Loging.css";

export default class Loging extends Component {
  state = {
    Account: "",
    Password: "",
  };

  handleSubmit = (e) => {
    const { Account, Password } = this.state;
    const payload = { Account, Password };
    if (Account === "" || Password === "") {
      alert("帳號或密碼不可空白");
    } else {
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Login`, payload)
        .then((res) => {
          console.log(res,24);
          // alert(res.data.Message);
          localStorage.setItem("Token", JSON.stringify(res.data.Token));
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log({error},32);
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
    const { Account, Password } = this.state;
    return (
      <div className="Loging">
        <div className="limiter">
          <div className="container">
            <div className="wrap">
              <form className="form" onSubmit={this.handleSubmit}>
                <span className="title">登入</span>
                <input
                  className="input"
                  type="text"
                  placeholder="帳號"
                  onChange={(e) => {
                    this.setState({ Account: e.target.value });
                  }}
                  value={Account}
                />
                <input
                  className="input"
                  type="password"
                  placeholder="密碼"
                  onChange={(e) => {
                    this.setState({ Password: e.target.value });
                  }}
                  value={Password}
                />
                <div className="text-right">
                  <span className="txt1">忘記</span>
                  <Link to="/Loging/Getpassword">
                    <a href="" className="txt2">
                      帳號 / 密碼?
                    </a>
                  </Link>
                </div>
                <button className="btn">登入</button>
                <div className="text-bottom">
                  <span className="txt1">還沒有帳號嗎?</span>
                  <Link to="/Register/Student">
                    <a href="" className="txt2">
                      註冊
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
