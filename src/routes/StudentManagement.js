import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import './Studentdata.css';
import '../routes/StudentReservation.css';
import Correctfrom from '../Assets/EmailValidate_check.png';
export default class StudentManagement extends Component {
  state = {
    ac: false,
    comp: false,
    student: [
      {
        number: 1,
        account: "aaa123",
        name: "AAA",
        email: "a1234@gmail.com",
        phone: "0912345678",
        year: "2020",
        classnumber: "C101",
        class: "資訊班",
      },
      {
        number: 2,
        account: "bbb123",
        name: "BBB",
        email: "b1234@gmail.com",
        phone: "0912345678",
        year: "1998",
        classnumber: "C102",
        class: "才藝班",
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
    const { student } = this.state;
    const data = student.filter((item, index, array) => {
      return item.number === parseInt(params.id);
    })

    const textstudent = data.map((item, index, array) => {
      return (
        <tr className="list" key={index}>
          <td>
            {item.number}
          </td>
          <td>
            {item.account}
          </td>
          <td>
            {item.name}
          </td>
          <td>
            {item.email}
          </td>
          <td>
            {item.phone}
          </td>
          <td>
            {item.year}
          </td>
          <td>
            {item.classnumber}
          </td>
          <td>
            {item.class}
          </td>
          <td className="td-btn">
            <button type="button" className="btn" onClick={this.alterData} style={{ width: "100px" }}>編輯</button>
            <button type="button" className="btn" style={{ width: "100px" }}>刪除</button>
          </td>
        </tr>
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
                  <form className="form"  >
                    <span className="title">
                      編輯
                    </span>
                    <div className="cancel">
                      <button className="g-right" onClick={this.alterData}> </button>
                    </div>
                    <div className="list">
                      <span className="list-text">姓名：</span>
                    </div>
                    <div className="list">
                      <span className="list-text">電子信箱：</span>
                    </div>
                    <div className="list">
                      <span className="list-text">電話：</span>
                    </div>
                    <div className="list">
                      <span className="list-text">學年度：</span>
                    </div>
                    <div className="list">
                      <span className="list-text">班級代號：</span>
                    </div>
                    <div className="list">
                      <span className="list-text">班級：</span>
                    </div>
                    <div className="list">
                      <button className="login-btn" onClick={this.comp}>
                        編輯
                      </button>
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
                <th className="tabletitle" colspan="7"><h2>學生管理系統</h2></th>
                <th className="tablecursor" colspan="2">
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
                  <th>學年度</th>
                  <th>班級代號</th>
                  <th>班級</th>
                  <th>管理</th>
                </tr>
              </thead>
              <tbody>
                {textstudent}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}
