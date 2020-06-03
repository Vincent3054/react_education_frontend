import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import "../../mixin/main.css";
import "../Studentdata.css";
import "../Reservation/StudentReservation.css";
import { Link } from "react-router-dom";
import Correctfrom from "../../Assets/EmailValidate_check.png";
export default class CounselorTeacherReservation2 extends Component {
  state = {
    ac: false,
    comp: false,
    student: [
      {
        number: 1,
        Class_Id: "才藝班",
        Name: "陳同學",
        date: "2020/05/20",
        Time: "14:20",
        type: "感情",
        StudentRemasks: "想換xxx老師",
        TeacherRemasks: "xxx老師沒空",
        BeforePSY: "王老師",
        NowPSY: "陳老師",
      },
      {
        number: 2,
        Class: "才藝班",
        name: "王同學",
        date: "2020/06/10",
        Time: "13:15",
        type: "學業",
        StudentRemasks: "想換xxx老師",
        TeacherRemasks: "xxx老師沒空",
        BeforePSY: "陳老師",
        NowPSY: "王老師",
      },
    ],
  };

  alterData = () => {
    const { ac } = this.state;
    if (ac == false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
  };
  comp = () => {
    const { comp, ac } = this.state;
    if (comp == false) {
      this.setState({ comp: true });
      this.setState({ ac: false });
    } else {
      this.setState({ comp: false });
    }
  };

  render() {
    const { ac, comp } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { student } = this.state;
    const data = student.filter((item, index, array) => {
      return item.number === parseInt(params.id);
    });

    const textstudent = data.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td>{item.number}</td>
          <td>{item.Class_Id}</td>
          <td>{item.Name}</td>
          <td>{item.date}</td>
          <td>{item.Time}</td>
          <td>{item.type}</td>
          <td>{item.StudentRemasks}</td>
          <td>{item.TeacherRemasks}</td>
          <td className="td-btn">
            <button
              type="button"
              className="btn"
              style={{ width: "80px" }}
              onClick={this.alterData}
            >
              修改
            </button>
            <button type="button" className="btn" style={{ width: "80px" }}>
              取消
            </button>
            <button type="button" className="btn" style={{ width: "80px" }}>
              接受
            </button>
          </td>
        </tr>
      );
    });

    const editstudent = data.map((item, index, array) => {
      return (
        <form className="form">
          <span className="title">編輯</span>
          <div class="close"  type="button" onClick={this.alterData}></div>
          <div className="list">
            <span className="list-text">預約日期：</span>
            <input className="input" type="date" value={item.date}></input>
          </div>
          <div className="list">
            <span className="list-text">預約時間：</span>
            <input className="input" type="time" value={item.time}></input>
          </div>
          <div className="list">
            <span className="list-text">諮詢類別：</span>
            <select className="input">
              <option value={item.type}>{item.type}</option>
              <option value="學業">學業</option>
              <option value="家庭">家庭</option>
              <option value="感情">感情</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <div className="list">
            <span className="list-text">老師備註：</span>
            <textarea
              className="input"
              value={item.TeacherRemasks}
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="list">
            <button className="login-btn" onClick={this.comp}>
              送出
            </button>
          </div>
        </form>
      );
    });

    return (
      <Layout>
        <div className="StudentReservation">
          <div className={comp ? `limiter` : `limiter-mone`}>
            <div className="background">
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

        <div className="StudentReservation">
          <div className={ac ? `limiter` : `limiter-mone`}>
            <div className="background">
              <div className="container">
                <div className="wrap">{editstudent}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="Studentdata">
          <div className="title">
            <table className="table">
              <thead>
                <th className="tabletitle" colspan="7">
                  <h2>輔導老師預約系統-接受預約</h2>
                </th>
                <th className="tablecursor" colspan="2">
                  <div class="demo">
                    <span>搜尋：</span>
                    <input
                      className="text"
                      type="text"
                      placeholder="輸入文字"
                    />
                  </div>
                </th>
                <tr>
                  <th colspan="1">接受預約</th>
                  <th>
                    <Link to="/CounselorTeacherReservation3/1">預約完成</Link>
                  </th>
                </tr>
                <tr className="list">
                  <th>編號</th>
                  <th>班級</th>
                  <th>學生姓名</th>
                  <th>預約日期</th>
                  <th>預約時間</th>
                  <th>諮詢類別</th>
                  <th>學生備註</th>
                  <th>老師備註</th>
                  <th>管理</th>
                </tr>
              </thead>
              <tbody>{textstudent}</tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}
