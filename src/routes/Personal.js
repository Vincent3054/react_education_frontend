import React, { Component } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import "./Personal.css";
import user from "../Assets/user.png";

export default class Personal extends Component {
  state = {
    personaldata:[],
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Basic `, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        console.log(res);
        const datalist = res.data;
        this.setState({
          personaldata: datalist
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })
  };
  render() {
    const{personaldata}=this.state;
    return (
      <Layout>
        <div className="personal">
          <div className="body">
            <h1>個人資訊</h1>
          </div>
          <div className="main">
            <div className="user">
              <img src={user} className="userimg" />
            </div>
            <div className="content">
              <div className="boxone">
                <span className="font">姓名</span>
                <span className="font">：</span>
                <span className="font">{personaldata.Name}</span>
              </div>
              <div className="boxtwo">
                <span className="font">聯絡電話</span>
                <span className="font">：</span>
                <span className="font">{personaldata.Phone}</span>
              </div>
              <div className="boxthree">
                <span className="font">電子郵件</span>
                <span className="font">：</span>
                <span className="font">{personaldata.Email}</span>
              </div>
              <div className="boxfour">
                <span className="font">班級</span>
                <span className="font">：</span>
                <span className="font">{personaldata.ClassName}</span>
              </div>
              <div className="boxfive">
                <span className="font">班級代號</span>
                <span className="font">：</span>
                <span className="font">{personaldata.Class_Id}</span>
              </div>
              <div className="boxsix">
                <span className="font">性別</span>
                <span className="font">：</span>
                <span className="font">{personaldata.Sex}</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
