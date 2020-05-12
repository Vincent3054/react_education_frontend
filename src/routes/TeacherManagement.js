import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import './Studentdata.css';
import '../routes/StudentReservation.css';
import '../routes/switch.css';
import Correctfrom from '../Assets/EmailValidate_check.png';
export default class TeacherManagement extends Component {
  state = {
    ac: false,
    comp: false,
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
    ]
  }


  alterData = () => {
    const { ac } = this.state;
    if (ac == false) {
      this.setState({ ac: true });
    }
    else {
      this.setState({ ac: false });
    }
  }
  comp = () => {
    const { comp, ac } = this.state;
    if (comp == false) {
      this.setState({ comp: true });
      this.setState({ ac: false });
    }
    else {
      this.setState({ comp: false });
    }
  }

  render() {
    const { ac, comp } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { teacher } = this.state;
    const data = teacher.filter((item, index, array) => {
      return item.number === parseInt(params.id);
    })

    const textteacher = data.map((item, index, array) => {
      return (
        <tr className="list" key={index}>
          <td>{item.number}</td>
          <td>{item.account}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.Roles}</td>
          <td className="td-btn">
            <button type="button" className="btn" style={{ width: "100px" }} onClick={this.alterData}>修改權限</button>
            <button type="button" className="btn" style={{ width: "100px" }}>刪除</button>
          </td>
        </tr>
      );
    })

    const editstudent = data.map((item, index, array) => {
      return (
        <form className="form"  >
          <span className="title">
            修改權限
          </span>
          <div className="cancel">
            <button className="g-right" onClick={this.alterData}> </button>
          </div>
          <div className="list">
            <span className="list-text">角色</span>
            <select className="input">
              <option value={item.Roles}>目前角色：{item.Roles}</option>
              <option value="最高管理員">最高管理員</option><option value="輔導老師">輔導老師</option><option value="班級老師">班級老師</option><option value="學生">學生</option>
            </select>
          </div>

          <div className="list">
            <span className="list-text">權限設定</span>
            <select className="input">
              <option value="Member">Member</option><option value="Login">Login</option><option value="Record">Record</option><option value="Article">Article</option><option value="class">class</option><option value="classAll">classAll</option>
            </select>
          </div>
          <tr className="list" style={{marginTop:"20px"}}>
            <th style={{ width: "100%" }}>
              <span className="list-text">驗證信</span>
            </th>
            <th>
              <div class="onoffswitch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" ></input>
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
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="1" ></input>
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
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="2" ></input>
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
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="3" ></input>
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
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="4" ></input>
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
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="5" ></input>
                <label class="onoffswitch-label" for="5">
                  <span class="onoffswitch-inner"></span>
                  <span class="onoffswitch-switch"></span>
                </label>
              </div>
            </th>
          </tr>

          <div className="list">
            <button className="login-btn" onClick={this.comp}>
              送出
            </button>
          </div>
        </form >
      );
    })

    return (
      <Layout>
        <div className="StudentReservation"  >
          <div className={comp ? `limiter` : `limiter-mone`}>
            <div className="background" >
              <div className="container" >
                <div className="wrap-comp">
                  <form className="form">
                    <span className="title">
                      編輯成功
                    </span>
                    <div style={{ textAlign: "center", display: "block" }}>
                      <img src={Correctfrom} alt="錯誤" title="Error" style={{ width: "140px" }} />
                    </div>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <span>
                        恭喜您編輯成功!
                      </span>
                    </div>
                    <div className="list">
                      <button className="login-btn" onClick={this.comp}>
                        回去查看
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="StudentReservation" >
          <div className={ac ? `limiter` : `limiter-mone`}>
            <div className="background"  >
              <div className="container" >
                <div className="wrap" >
                  {editstudent}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Studentdata">
          <div className="title">
            <table className="table">
              <thead>
                <th className="tabletitle" colspan="4"><h2>老師管理系統</h2></th>
                <th className="tablecursor" colspan="3">
                  <div class="demo">
                    <span>搜尋：</span>
                    <input className="text" type="text" placeholder="輸入文字" />
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
              <tbody>
                {textteacher}
              </tbody>
            </table>
          </div>
        </div>
      </Layout >
    );
  }
}
