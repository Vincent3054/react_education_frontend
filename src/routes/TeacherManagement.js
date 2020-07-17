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
    //角色修改系列表
    Roledata: [],//角色列表
    Role: "",//修改角色
    //權限修改系列
    Role_title: "",//列表選單要帶的值ex.CL
    //及時權限按鈕系列
    // Role_list_personal: [],//列出個人權限
    Role_list_personal_state: [],
    //修改權縣post參數
    data: [],//修改權限封包
    Account_Role: "",//帳號
  }
  componentDidMount() {
    this.get();//get所有老師資料
    //#region get所有角色權限列表
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
    //#endregion
  }
  //#region get 所有老師列表
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
  //#endregion
  //#region 根據帳號get所有權縣表資料
  getRole(Account) {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Permission?Account=${Account}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
    })
      .then((res) => {
        // console.log(res, 85);
        const datalist = res.data.Data.Permission;
        // console.log(datalist, 87)
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
  //#endregion
  //#region 開啟子視窗1 (修改權限) 
  alterData = (e, ItemAccount) => {
    const { ac } = this.state;
    if (ac === false) {
      this.getRole(ItemAccount); //呼叫根據帳號get所有權縣表資料
      this.setState({
        ac: true,
        Account_Role: ItemAccount,
      });
    } else {
      this.setState({
        ac: false,
        Account_Role: "", //關閉後清空帳號
        data: [], //關閉後清空要修改權限封包
      });
    }
  };
  //#endregion
  //#region 開啟子視窗2 (修改權限完成)  
  comp = () => {
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
  //#endregion
  //#region put修改角色權限
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
  //#endregion
  //#region 修改權限列表系列  
    //#region 功能一：按鈕開關及時顯示　功能二：將點選按鈕的Id儲存到封包裡
    chkChecked = (Key) => {
      const { data } = this.state;
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
      //#region 防呆功能 如果以選取不寫入封包
        // var result = data.map( function(item, index) {
        //   return item.Permission_Id;
        // }).indexOf(Permission_Id);
        // console.log(data.indexOf(Permission_Id),171)
        // console.log(result)
        // if (result===-1) 
        //data.push(Permission_Id);

        // let longWords = data.filter(item => 
        //   data.Permission_Id === Permission_Id
          
        //   );
        //   return item.Permission_Id.indexOf(Permission_Id !== -1)
        // const result = data.filter(function (item, index, array) {
        //   if (item.Permission_Id.indexOf(Permission_Id)!==-1)
          
        //   return Permission_Id; 
        // });
        // data.push(result);
        // if (data===[]){
        //   data.push(Permission_Id);
        // }
        // else{
        //   data.forEach(function (item, index, array) {
        //     if(item.Permission_Id.indexOf(Permission_Id)!==-1){
        //     data.push(Permission_Id);
        //   }
        //   });
        // }
        //  if (data===[]){
        //   const{data}=this.props
        //  data.push(Permission_Id);
        //  }
        data.push(Permission_Id);
      //#endregion

      //改完後用setState將lists重新設定為arrLists
      this.setState({
        Role_list_personal_state: arrLists,
      }, () => {
        console.log(this.state.Role_list_personal_state, 166)
        console.log(this.state.data, 167)
      });
    }
  //#endregion
    //#region post修改權限封包
    handleSubmit = (e) => {
      const { Account_Role, data } = this.state; //獲取帳號和權限封包
      const payload = { data };
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminPermission?Account=${Account_Role}`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res, 196);
          // alert(res.data.Message);
          this.comp();//修改成功後開啟子視窗2 (修改權限完成)
        })
        .catch((error) => {
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status,192);
          const err = JSON.parse(error.request.response);
          //錯誤訊息
          alert(err.Message);
        });
    }
    //#endregion
  //#endregion
  render() {
    const { ac, comp, TeacherAll } = this.state; //開關和列表
    const { Roledata, Role } = this.state;//修改角色系列
    const { Role_title, Role_list_personal_state } = this.state; //修改權縣系列
    //#region map修改權限表
    //#region 根據選單filter權限表
    const Role_titledata = Role_list_personal_state.filter(function (item, index, array) {
      const data = item.Permission_Id;
      const data1 = data.substring(0, 2);
      return data1 === Role_title; //把Id前二個字母抓出來比對
    });
    //#endregion
    //#region  map權限表
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
    //#endregion
    //#endregion
    //#region map角色列表
    const RoleList = Roledata.map((item, index, array) => {
      return (
        <option key={index} value={item.Role}>{item.Role}</option>
      );
    });
    //#endregion
    //#region mqp每列修改角色、修改權限按鈕
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
            <select //Change角色列表
              className="input"
              onChange={(e) => {
                this.setState({ Role: e.target.value })
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
    //#endregion
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
                    <div className="list" onClick={this.comp}>
                      <button className="login-btn">
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
                  <form className="form" onSubmit={this.handleSubmit}>
                    <span className="title">修改權限</span>
                    <div className="cancel">
                      <div class="close" type="button" onClick={this.alterData}></div>
                    </div>
                    <div className="list" style={{ marginBottom: "20px" }}>
                      <span className="list-text">權限設定</span>
                      <select className="input"
                        onChange={(e) => {
                          this.setState({ Role_title: e.target.value });
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
