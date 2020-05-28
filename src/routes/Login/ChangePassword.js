import React, { Component } from "react";
import axios from "axios";
import "../../mixin/main.css";
import "./Register.css";
export default class ChangePassword extends Component {
  state = {
    Password: "",
    NewPassword: "",
    PasswordCheck: "",
  };
  handleSubmit = (e) => {
    const { Password, NewPassword, PasswordCheck } = this.state;
    const payload = {
      Password,
      NewPassword,
      PasswordCheck,
    };
    if (Password === "" || NewPassword === "" || PasswordCheck === "") {
      alert("欄位不可空白");
    } else if (NewPassword !== PasswordCheck) {
      alert("新密碼不一致");
    } else {
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Members`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data.Message);
          localStorage.setItem("Token", JSON.stringify(res.data.Data.Token));
          this.props.history.push("/ChangePasswordComplete");
        })
        .catch((error) => {});
    }
  };
  render() {
    const { Password, NewPassword, PasswordCheck } = this.state;
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
                      this.setState({ NewPassword: e.target.value });
                    }}
                    value={NewPassword}
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
