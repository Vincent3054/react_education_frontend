import React, { Component } from "react";
import axios from "axios";
import Layout from "../layouts/Layout";
import "../mixin/main.css";
import "./Studentdata.css";
import "./Reservation/StudentReservation.css";
import "./switch.css";
import Correctfrom from "../Assets/EmailValidate_check.png";
export default class TeacherManagement extends Component {
  state = {
    visible: false, //控制Modal顯示
    notification: false, //控制送出表單後的視窗顯示
    teacher: [
      {
        number: 1,
        account: "aaa123",
        name: "AAA",
        email: "a1234@gmail.com",
        Roles: "輔導老師",
        phone: "0912345678",
      },
      {
        number: 2,
        account: "bbb123",
        name: "BBB",
        email: "b1234@gmail.com",
        Roles: "班級老師",
        phone: "0912345678",
      },
    ],
    TeacherAll:[],
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminTeacher?Role_Id=R002`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("Token")),
    }
    })
    .then((res) => {
      console.log(res.data.Data.DataList);
      const datalist = res.data.Data.DataList;
      this.setState({
        TeacherAll: datalist
      }, () => {
        // console.log(this.state.classlist)
      })
    }).catch((err) => {
      console.error({ err }, 90);
    })
  }
  showModal = (e) => {
    const { visible } = this.state;
    console.log(e);
    if (visible === false) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  showNotification = (event) => {
    const { notification } = this.state;
    if (notification === false) {
      this.setState({
        notification: true,
      });
    } else {
      this.setState({
        notification: false,
      });
    }
  };
  handleSubmit = (e) => {
    const { notification } = this.state;
    e.preventDefault();
    this.setState({ notification: true });
  };

  render() {
    const { visible, notification,TeacherAll } = this.state;
    const textteacher = TeacherAll.map((item, index) => {
      return (
        <tr className="list-body" key={index}>
          <td>{index}</td>
          <td>{item.Account}</td>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Mark}</td>
          <td className="td-btn">
            <button
              type="button"
              className="btn"
              style={{ width: "100px" }}
              onClick={this.showModal}
            >
              修改權限
            </button>
            <button type="button" className="btn" style={{ width: "100px" }}>
              刪除
            </button>
          </td>
        </tr>
      );
    });

    return (
      <Layout>
        <div className="StudentReservation">
          <div className={notification ? `limiter` : `limiter-mone`}>
            <div
              className="background"
              onClick={(e) => this.showNotification(e)}
            >
              <div className="container">
                <div className="wrap-comp">
                  <form className="form">
                    <span className="title">編輯成功</span>
                    <div style={{ textAlign: "center", display: "block" }}>
                      <img
                        src={Correctfrom}
                        alt="錯誤"
                        title="Error"
                        style={{ width: "140px" }}
                      />
                    </div>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <span>恭喜您編輯成功!</span>
                    </div>
                    <div className="list">
                      <button
                        className="login-btn"
                        onClick={this.showNotification}
                      >
                        回去查看
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="StudentReservation">
          <div className={visible ? `limiter` : `limiter-mone`}>
            <div className="background" onClick={this.showModal}>
              <div className="container">
                <div className="wrap">
                <form className="form" onSubmit={this.handleSubmit}>
                    <span className="title">修改權限</span>
                    <div className="cancel">
                      <button className="g-right" onClick={this.showModal}></button>
                    </div>
                    <div className="list">
                      <span className="list-text">角色</span>
                      <select className="input">
                        <option value={TeacherAll.Roles}>目前角色：{TeacherAll.Roles}</option>
                        <option value="最高管理員">最高管理員</option>
                        <option value="輔導老師">輔導老師</option>
                        <option value="班級老師">班級老師</option>
                        <option value="學生">學生</option>
                      </select>
                    </div>
          
                    <div className="list">
                      <span className="list-text">權限設定</span>
                      <select className="input">
                        <option value="Member">Member</option>
                        <option value="Login">Login</option>
                        <option value="Record">Record</option>
                        <option value="Article">Article</option>
                        <option value="class">class</option>
                        <option value="classAll">classAll</option>
                      </select>
                    </div>
                    <tr className="list" style={{ marginTop: "20px" }}>
                      <th style={{ width: "100%" }}>
                        <span className="list-text">驗證信</span>
                      </th>
                      <th>
                        <div class="onoffswitch">
                          <input
                            type="checkbox"
                            name="onoffswitch"
                            class="onoffswitch-checkbox"
                            id="myonoffswitch"
                          ></input>
                          <label class="onoffswitch-label" for="myonoffswitch">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </th>
                    </tr>
                    <tr className="list">
                      <th style={{ width: "100%" }}>
                        <span className="list-text">登入</span>
                      </th>
                      <th>
                        <div class="onoffswitch">
                          <input
                            type="checkbox"
                            name="onoffswitch"
                            class="onoffswitch-checkbox"
                            id="1"
                          ></input>
                          <label class="onoffswitch-label" for="1">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </th>
                    </tr>
                    <tr className="list">
                      <th style={{ width: "100%" }}>
                        <span className="list-text">瀏覽文章列表</span>
                      </th>
                      <th>
                        <div class="onoffswitch">
                          <input
                            type="checkbox"
                            name="onoffswitch"
                            class="onoffswitch-checkbox"
                            id="2"
                          ></input>
                          <label class="onoffswitch-label" for="2">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </th>
                    </tr>
                    <tr className="list">
                      <th style={{ width: "100%" }}>
                        <span className="list-text"> 文章頁面</span>
                      </th>
                      <th>
                        <div class="onoffswitch">
                          <input
                            type="checkbox"
                            name="onoffswitch"
                            class="onoffswitch-checkbox"
                            id="3"
                          ></input>
                          <label class="onoffswitch-label" for="3">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </th>
                    </tr>
                    <tr className="list">
                      <th style={{ width: "100%" }}>
                        <span className="list-text">瀏覽文章列表</span>
                      </th>
                      <th>
                        <div class="onoffswitch">
                          <input
                            type="checkbox"
                            name="onoffswitch"
                            class="onoffswitch-checkbox"
                            id="4"
                          ></input>
                          <label class="onoffswitch-label" for="4">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </th>
                    </tr>
                    <tr className="list">
                      <th style={{ width: "100%" }}>
                        <span className="list-text">班級列表</span>
                      </th>
                      <th>
                        <div class="onoffswitch">
                          <input
                            type="checkbox"
                            name="onoffswitch"
                            class="onoffswitch-checkbox"
                            id="5"
                          ></input>
                          <label class="onoffswitch-label" for="5">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </th>
                    </tr>
                    <div className="list">
                      <button className="login-btn">送出</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Studentdata">
          <div className="title">
            <table className="table">
              <thead>
                <th className="tabletitle" colspan="4">
                  <h2>老師管理系統</h2>
                </th>
                <th className="tablecursor" colspan="3">
                  <div class="demo">
                    <span>搜尋：</span>
                    <input
                      className="text"
                      type="text"
                      placeholder="輸入文字"
                    />
                  </div>
                </th>
                <tr className="list">
                  <th>序號</th>
                  <th>帳號</th>
                  <th>姓名</th>
                  <th>電子信箱</th>
                  <th>電話</th>
                  <th>角色</th>
                  <th>管理</th>
                </tr>
              </thead>
              <tbody>{textteacher}</tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}
