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
    //控制
    ac: false,
    comp: false,
    //查詢所有老師列表
    TeacherAll:[],
    //角色列表
    Roledata:[],
    //修改角色
    Role:"",
  };
  componentDidMount() {
    this.get();
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Admin`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("Token")),
    }
    })
    .then((res) => {
      const datalist = res.data.Data.DataList;
      this.setState({
        Roledata: datalist
      })
    }).catch((err) => {
      console.error({ err }, 91);
    })
  }
  get(){
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminTeacherAll`, {
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
  alterData = (e) => {
    const { ac } = this.state;
    if (ac === false) {
      this.setState({
        ac: true,
      });
    } else {
      this.setState({
        ac: false,
      });
    }
  };
  comp = (e) => {
    const { comp } = this.state;
    if (comp === false) {
      this.setState({
        comp: true,
        ac: false ,
      });
    } else {
      this.setState({
        comp: false,
      });
    }
  };
  changeRole=(e,Account,Role_Id)=>{
    const payload = {Account,Role_Id};
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Permission`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          alert(res.data);
          this.get();
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
  render() {
    const { ac, comp,TeacherAll,Roledata,Role } = this.state;
    const RoleList = Roledata.map((item, index, array) => {
      return (
          <option key={index} value={item.Role}>{item.Role}</option>
      );
    });
    const textteacher = TeacherAll.map((item, index) => {
      return (
        <tr className="list-body" key={index}>
          <td>{index+1}</td>
          <td>{item.Account}</td>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Role_Id}{item.Mark}</td>
          <td>
            <select 
              className="input" 
              onChange={(e) => {
              this.setState({Role: e.target.value },
                (e)=>{console.log(this.state.Role)});
              }}
              value={Role}
            >
              {RoleList}
            </select>
          </td>
          <td className="td-btn">
            <button type="button" className="btn" style={{ width: "100px" }} onClick={e=>{this.changeRole(e,item.Account,Role)}} >
              修改角色
            </button>
            <button
              type="button"
              className="btn"
              style={{ width: "100px" }}
              onClick={this.alterData}
            >
              修改權限
            </button>
          </td>
        </tr>
      );
    });

    return (
      <Layout>
        <div className="StudentReservation">
          <div className={comp ? `limiter` : `limiter-mone`}>
            <div className="background" >
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
                        onClick={this.comp}
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
          <div className={ac ? `limiter` : `limiter-mone`}>
            <div className="background">
              <div className="container">
                <div className="wrap">
                <form className="form" >
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
                    <div className="list"  onClick={this.comp}>
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
                <th className="tabletitle" colspan="5">
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
                  <th>目前角色</th>
                  <th>修改角色</th>
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
