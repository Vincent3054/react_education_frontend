import React, { Component } from "react";
import axios from "axios";
import Layout from "../../layouts/Layout";
import "../../mixin/main.css";
import "../Studentdata.css";
import "../Login/Register.css";
import "./StudentReservation.css";
import Correctfrom from "../../Assets/EmailValidate_check.png";

export default class StudentReservationStatus extends Component {
  state = {
    ac: false,
    comp: false,
    Period:"",
	  Time:"",
	  Date:"",
    StudentsRemarks:"",
    Category:"",
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
    if (ac === false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
  };
  comp = () => {
    const { comp } = this.state;
    if (comp === false) {
      this.setState({ comp: true });
      this.setState({ ac: false });
    } else {
      this.setState({ comp: false });
    }
  };
  //目前有bug 待研究
  stopPropagation(e) {
    e.nativeEvent.stopImmediatePropagation();
  }
  handleSubmit = (e) => {
    const {
      Period,
	    Time,
	    Date,
      StudentsRemarks,
    } = this.state;
    const payload = {
      Period,
	    Time,
	    Date,
      StudentsRemarks,
    };
    if (
      Period=== "" || Time=== "" ||Date=== "" 
    ) 
    {
      alert("欄位不可空白");
    }
    else {
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Reservation `, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res.data);
          // alert(res.data.Message);
          this.comp();
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
  };
  render() {
    const{ 
      Period,
	    Time,
	    Date,
      StudentsRemarks,
    }=this.state;
    const { ac, comp } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { student } = this.state;
    console.log(match);
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
          <td>{item.StudentRemasks}</td>
          <td>預約成功</td>
        </tr>
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
                    <span className="title">預約成功</span>
                    <div style={{ textAlign: "center", display: "block" }}>
                      <img
                        src={Correctfrom}
                        alt="成功"
                        title="ocmp"
                        style={{ width: "140px" }}
                      />
                    </div>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <span>恭喜您預約成功!</span>
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
                <div className="wrap">
                  <form className="form" onSubmit={this.handleSubmit}>
                    <span className="title">預約</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
                    <div className="list">
                      <span className="list-text">預約日期：</span>
                      <input className="input" type="date"  onChange={(e) => {
                        this.setState({ Date: e.target.value });
                      }}
                      value={Date}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">預約時段：</span>
                      <select className="input"  onChange={(e) => {
                        this.setState({ Period: e.target.value });
                      }}
                      value={Period}>
                        <option></option>
                        <option value="早上">早上</option>
                        <option value="中午">中午</option>
                        <option value="下午">下午</option>
                        <option value="晚上">晚上</option>
                      </select>
                    </div>
                    <div className="list">
                      <span className="list-text">預約時間：</span>
                      <input className="input" type="time" onChange={(e) => {
                        this.setState({ Time: e.target.value });
                      }}
                      value={Time}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">諮詢內容：</span>
                      <textarea
                        className="input"
                        style={{ height: "100px" }}
                        onChange={(e) => {
                          this.setState({ StudentsRemarks: e.target.value });
                        }}
                        value={StudentsRemarks}></textarea>
                    </div>
                    <div className="list">
                      <button className="login-btn" >
                        預約
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
                <th className="tabletitle" colspan="5">
                  <h2>學生預約系統</h2>
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
                <tr className="list">
                  <th>編號</th>
                  <th>班級</th>
                  <th>學生姓名</th>
                  <th>預約日期</th>
                  <th>預約時間</th>
                  <th>學生備註</th>
                  <th>預約狀態</th>
                </tr>
              </thead>
              <tbody>{textstudent}</tbody>
            </table>
            <div>
              <button
                onClick={this.alterData}
                className="btn"
                style={{ width: "100px" }}
              >
                預約
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
