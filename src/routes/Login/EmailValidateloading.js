import React, { Component } from "react";
import axios from "axios";
import "../../mixin/main.css";
import "./Register.css";
import { Link } from "react-router-dom";
import Loading  from "../../Assets/loading.png";
export default class EmailValidateloading extends Component {
  state = {
    Account:"",
    AuthCode:"",
  };
  componentDidMount() {
    const data=this.props.location.search;
    const group = data.split('&');
    const AccountGroup=group[0].split('=');
    const AuthCodeGroup=group[1].split('=');
    const Account=AccountGroup[1];
    const AuthCode=AuthCodeGroup[1];
    const payload = {
      Account,
      AuthCode,
    };
      // e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Email`, payload)
        .then((res) => {
          console.log(res);
          this.props.history.push("/RegisterEmailValidateComplete");
        })
        .catch((error) => {
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status);
          // const err = JSON.parse(error.request.response);
          //錯誤訊息
          this.props.history.push("/RegisterEmailValidateFail");
        });
   };
  // handleSubmit = (e) => {
    
  // };
  render() {
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap" style={{ width: "600px" }}>
              <form className="form">
                <span className="title">驗證中</span>
                <div style={{ textAlign: "center", display: "block" }}>
                  <img
                    src={Loading}
                    alt="驗證中"
                    title="Success"
                    style={{ width: "140px" }}
                  />
                </div>
                <div style={{ marginTop: "40px",marginBottom:"70px", textAlign: "center" }}>
                  <span>驗證中請稍後</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
