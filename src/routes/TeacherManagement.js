import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import './Studentdata.css';
import indeximg from '../Assets/1926.jpg';
export default class TeacherManagement extends Component {
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
          <td>{item.number}</td>
          <td>{item.account}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.Roles}</td>
          <td className="td-btn">
            <button type="button" className="btn" style={{ width: "100px" }}>修改</button>
            <button type="button" className="btn" style={{ width: "100px" }}>刪除</button>
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
      </Layout>
    );
  }
}
