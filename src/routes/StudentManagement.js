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

    const editstudent = data.map((item, index, array) => {
      return (
        <form className="form"  >
          <span className="title">
            編輯
          </span>
          <div className="cancel">
            <button className="g-right" onClick={this.alterData}> </button>
          </div>
          <div className="list">
            <span className="list-text">姓名：</span>
            <input className="input" type="text" value={item.name} />
          </div>
          <div className="list">
            <span className="list-text">電子信箱：</span>
            <input className="input" type="text" value={item.email} />
          </div>
          <div className="list">
            <span className="list-text">電話：</span>
            <input className="input" type="text" value={item.phone} />
          </div>
          <div className="list">
            <span className="list-text">學年度：</span>
            <select className="input">
              <option value={item.year}>{item.year}年</option>
              <option value="2040">2040</option><option value="2039">2039</option><option value="2038">2038</option> <option value="2037">2037</option><option value="2036">2036</option><option value="2035">2035</option><option value="2034">2034</option><option value="2033">2033</option><option value="2032">2032</option><option value="2031">2031</option><option value="2030">2030</option><option value="2029">2029</option><option value="2028">2028</option><option value="2027">2027</option><option value="2026">2026</option><option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option>
            </select>
          </div>
          <div className="list">
            <span className="list-text">班級代號：</span>
            <select className="input">
              <option value={item.classnumber}>{item.classnumber}</option>
              <option value="C101">C101</option><option value="C102">C102</option><option value="C103">C103</option><option value="C104">C104</option><option value="C105">C105</option><option value="C106">C106</option><option value="C107">C107</option><option value="C108">C108</option><option value="C109">C109</option><option value="C110">C110</option>
            </select>
          </div>
          <div className="list">
            <span className="list-text">班級：</span>
            <select className="input">
              <option value={item.class}>{item.class}</option>
              <option value="資訊班">資訊班</option><option value="藝術班">資訊班</option><option value="普通班">普通班</option><option value="A班">A班</option><option value="B班">B班</option><option value="C班">C班</option><option value="D班">D班</option>
            </select>
          </div>
          <div className="list">
            <button className="login-btn" onClick={this.comp}>
              送出
            </button>
          </div>
        </form>
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
