import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import './Studentdata.css';
import indeximg from '../Assets/1926.jpg';
export default class TeacherAuthority extends Component {
  state = {
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
  render() {

    const { match } = this.props;
    const { params } = match;
    const { teacher } = this.state;
    const data = teacher.filter((item, index, array) => {
      return item.number === parseInt(params.id);
    })

    const textteacher = data.map((item, index, array) => {
      return (
        <tr className="list" key={index}>
          <td>
            {item.number}
          </td>
          <td>
            {item.account}
          </td>
          <td>
            <div className="list" style={{ lineHeight: "0px" }}>
              <input className="input" type="text" value={item.name} ></input>
            </div>
          </td>
          <td>
            <div className="list" style={{ lineHeight: "0px" }}>
              <input className="input" type="text" value={item.email} ></input>
            </div>
          </td>
          <td>
            <div className="list" style={{ lineHeight: "0px" }}>
              <input className="input" type="text" value={item.phone} ></input>
            </div>
          </td>
          <td>
            <div className="list" style={{ lineHeight: "0px" }}>
              <select className="input">
                <option>目前角色:{item.Roles}</option>
                <option value="最高管理員">最高管理員</option><option value="輔導老師">輔導老師</option><option value="班級老師">班級老師</option><option value="學生">學生</option>
              </select>
            </div>
          </td>
          <td className="td-btn">
            <button type="button" className="btn" style={{ width: "100px" }}>修改資料</button>
            <button type="button" className="btn" style={{ width: "100px" }}>修改權限</button>
          </td>
        </tr>
      );
    })

    return (
      <Layout>
        <div className="Studentdata">
          <div className="title">
            <table className="table">
              <thead>
                <th className="tabletitle" colspan="3"><h2>修改角色</h2></th>
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

            <table className="table">
              <thead>
                <th className="tabletitle" colspan="3"><h2>修改權限</h2></th>
                <tr className="list">
                  <th>Member</th>
                  <th>Login</th>
                  <th>Record</th>
                  <th>Article</th>
                  <th>class</th>
                  <th>classAll</th>
                </tr>
              </thead>
              <tbody>
                <tr className="list">
                  <th>
                    驗證信
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>登入
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>
                    瀏覽文章列表(搜尋)
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>
                    文章頁面
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>
                    瀏覽文章列表(搜尋)
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>
                    班級列表
                  <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                </tr>
                <tr className="list">
                  <th>註冊
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>忘記密碼
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>新增文章
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th></th>
                  <th>新增學生
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th></th>
                </tr>
                <tr className="list">
                  <th>修改密碼
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>登出
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th>修改文章
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th></th>
                  <th>修改學生
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th></th>
                </tr>
                <tr className="list">
                  <th>刪除帳號
                  <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th></th>
                  <th>刪除文章
                  <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th></th>
                  <th>刪除學生
                    <label for="ON">ON</label>
                    <input type="radio" name="switch" id="ON" />
                    <label for="OFF">OFF</label>
                    <input type="radio" name="switch" id="OFF" />
                  </th>
                  <th></th>
                </tr>
                <tr className="list" style={{ height: "100px" }}>
                  <td colspan="6" style={{ textAlign: "right" }}>
                    <button type="button" className="btn" style={{ width: "10%", height: "50px" }}>確認修改</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}
