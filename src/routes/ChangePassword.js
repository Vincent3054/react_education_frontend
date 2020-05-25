import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../mixin/main.css";
import "../routes/Register.css";
export default class ChangePassword extends Component {
  state = {
    Password: "",
    NewPasswordS: "",
    PasswordCheck: "",
  };
  handleSubmit = (e) => {
    const { Password, NewPasswordS, PasswordCheck } = this.state;
    const payload = {
      Password,
      NewPasswordS,
      PasswordCheck,
    };
    e.preventDefault();
    axios
      .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Members`, payload)
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
  };
  render() {
    const { Password, NewPasswordS, PasswordCheck } = this.state;
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap" style={{ width: "600px" }}>
              <form className="form" onSubmit={this.handleSubmit}>
                <span className="title">修改密碼</span>
                <span>請填寫你目前的密碼和驗證碼，以修改密碼：</span>
                <div className="list">
                  <span className="list-text">目前密碼</span>
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
                  <span className="list-text">新密碼</span>
                  <input
                    className="input"
                    type="password"
                    onChange={(e) => {
                      this.setState({ NewPasswordS: e.target.value });
                    }}
                    value={NewPasswordS}
                  />
                </div>
                <div className="list">
                  <span className="list-text">新密碼確認</span>
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
                  <button className="login-btn">修改密碼</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//把網址帶給我的參數存起來，把帳號跟驗證碼在帶給後端
//<Link to="/Loging/ChangePasswordComplete">                </Link>
//<div className="list"><span className="list-text">驗證碼</span><input className="input" type="text" /></div>
