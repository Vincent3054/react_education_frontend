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
    TeacherAll: [],
    //角色修改系列
    Roledata: [],//角色列表
    Role: "",//修改角色
    //權限修改系列
    Role_title: "",//列表選單要帶的值ex.CL
    Role_list: [],//列出權限名稱
    Role_list_personal: [],//列出個人權限
    Account: "",
    //權限預設讀取系列
    Role_list_personal_state: [],
    dta: [],
    //帳號
    Account_Role: "",
  }
  componentDidMount() {
    this.get();//查看所有老師資料
    //查看所有角色權限列表
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
    //查看所有權限列表
    //   axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminPermission?Type=Permission`, {
    //   headers: {
    //     Authorization: JSON.parse(localStorage.getItem("Token")),
    //   }
    //   })
    //   .then((res) => {
    //     console.log(res,49);
    //     const datalist = res.data.Data.PermissionList;
    //     console.log(datalist,51);

    //     this.setState({
    //       Role_list: datalist
    //     })
    //   }).catch((err) => {
    //     console.error({ err }, 49);
    //   })

  }

  get() {
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
  getRole(Account) {
    //根據帳號查詢所有權縣資料
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Permission?Account=${Account}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
    })
      .then((res) => {
        console.log(res, 85);
        const datalist = res.data.Data.Permission;
        console.log(datalist, 87)
        this.setState({
          Role_list_personal: datalist,
          Role_list_personal_state: datalist,
        }, () => {
          console.log(this.state.Role_list_personal_state, 96)
        })
      }).catch((err) => {
        console.error({ err }, 92);
      })
  }
  alterData = (e, ItemAccount) => {
    const { ac } = this.state;
    this.getRole(ItemAccount);

    if (ac === false) {
      this.setState({
        ac: true,
        Account_Role: ItemAccount,
      }, () => {
        console.log(this.state.Account_Role, 111)
      });
    } else {
      this.setState({
        ac: false,
        Account_Role: "",
      });
    }
  };
  comp = (e) => {
    const { comp } = this.state;
    if (comp === false) {
      this.setState({
        comp: true,
        ac: false,
      });
    } else {
      this.setState({
        comp: false,
      });
    }
  };
  changeRole = (e, Account, Role_Id) => {
    const payload = { Account, Role_Id };
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
  //index傳錯
  chkChecked = (Key) => {
    const { dta } = this.state;
    console.log(Key, 151)
    //修改時先將this.state.lists指定給一個變數
    let arrLists = this.state.Role_list_personal_state
    console.log(arrLists, 154);
    //確認清單中的該事項目前狀態是不是已完成
    if (arrLists[Key].Switch === true)
      //原本是true的話這時候會變false
      arrLists[Key].Switch = false
    else if (arrLists[Key].Switch === false)
      //原本是false的話這時候會變true
      arrLists[Key].Switch = true
    let Id = arrLists[Key].Permission_Id;
    console.log(arrLists[Key])
    let Permission_Id = { Permission_Id: Id };;
    dta.push(Permission_Id);
    //改完後用setState將lists重新設定為arrLists
    this.setState({
      Role_list_personal_state: arrLists,
    }, () => {
      console.log(this.state.Role_list_personal_state, 166)
      console.log(this.state.dta, 167)
    });
    // this.getRole("cot003");
  }
  handleSubmit() {
    const { Account_Role, dta } = this.state;
    const payload = {
      dta
    };
    axios
      .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminPermission?Account=${Account_Role}`, payload, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("Token")),
        },
      })
      .then((res) => {
        console.log(res, 196);
        alert(res.data.Message);

      })
      .catch((error) => {
        const status = error.response.status;
        //錯誤狀態碼
        console.log(status, 201);
        const err = JSON.parse(error.request.response);
        //錯誤訊息
        alert(err.Message);
      });
  }
  render() {
    const { ac, comp, TeacherAll, Roledata, Role } = this.state;
    const { Role_title, Role_list_personal, Role_list_personal_state } = this.state;
    //根據選單查詢權限
    const Role_titledata = Role_list_personal_state.filter(function (item, index, array) {
      // console.log(item.Permission,136)
      const data = item.Permission_Id;
      const data1 = data.substring(0, 2);
      //  console.log(data,136)
      return data1 === Role_title;
    });

    // console.log(Role_titledata,139);
    const Role_datalist = Role_titledata.map((item, index, array) => {
      return (
        <tr className="list" key={index} >
          <th style={{ width: "100%" }}>
            <span className="list-text">{item.Type}{item.Switch}</span>
          </th>
          <th>
            <div class="onoffswitch">
              <input
                type="checkbox"
                name="onoffswitch"
                class="onoffswitch-checkbox"
                id={item.Permission_Id}
                checked={item.Switch}
                onChange={this.chkChecked.bind(this, item.key)}
              ></input>
              <label class="onoffswitch-label" for={item.Permission_Id}>
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </th>
        </tr>
      );
    });
    const RoleList = Roledata.map((item, index, array) => {
      return (
        <option key={index} value={item.Role}>{item.Role}</option>
      );
    });
    const textteacher = TeacherAll.map((item, index) => {
      return (
        <tr className="list-body" key={index}>
          <td>{index + 1}</td>
          <td>{item.Account}</td>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Role_Id}{item.Mark}</td>
          <td>
            <select
              className="input"
              onChange={(e) => {
                this.setState({ Role: e.target.value },
                  (e) => { console.log(this.state.Role) });
              }}
              value={Role}
            >
              {RoleList}
            </select>
          </td>
          <td className="td-btn">
            <button type="button" className="btn" style={{ width: "100px" }} onClick={e => { this.changeRole(e, item.Account, Role) }} >
              修改角色
            </button>
            <button
              type="button"
              className="btn"
              style={{ width: "100px" }}
              onClick={e => { this.alterData(e, item.Account) }}
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
                  <form className="form">
                    <span className="title">修改權限</span>
                    <div className="cancel">
                      <div class="close" type="button" onClick={this.alterData}></div>
                    </div>
                    <div className="list" style={{ marginBottom: "20px" }}>
                      <span className="list-text">權限設定</span>
                      <select className="input"
                        onChange={(e) => {
                          this.setState({ Role_title: e.target.value },
                            (e) => { console.log(this.state.Role_title) });
                        }}
                        value={Role_title}>
                        <option>請選擇功能分類</option>
                        <option value="CL">CL</option>
                        <option value="ME">ME</option>
                        <option value="PS">PS</option>
                        <option value="PE">PE</option>
                      </select>
                    </div>
                    {Role_datalist}
                    <div className="list" onClick={this.handleSubmit} >
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
