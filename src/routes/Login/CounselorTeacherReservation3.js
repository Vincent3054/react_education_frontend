import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "../../mixin/main.css";
import "../Studentdata.css";
import { Link } from "react-router-dom";
export default class CounselorTeacherReservation3 extends Component {
  state = {
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
    Reservation:[],
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/PSYStatusRecord?Fettle=3`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        console.log(res);
        const datalist = res.data.Data.DataList;
        this.setState({
          Reservation: datalist
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })
  };
  render() {
    const { Reservation } = this.state;
    // const data = student.filter((item, index, array) => {
    //   return item.number === parseInt(params.id);
    // });
    const textstudent = Reservation.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td>{index+1}</td>
          <td>{item.Class_Name}</td>
          <td>{item.Name}</td>
          <td>{item.Date}</td>
          <td>{item.Time}</td>
          <td>{item.StudentsRemarks}</td>
          <td>{item.TeacherRemarks}</td>
          <td className="td-btn">
            <button type="button" className="btn" style={{ width: "150px" }}>
              填寫輔導紀錄
            </button>
          </td>
        </tr>
      );
    });

    return (
      <Layout>
        <div className="Studentdata">
          <div className="title">
            <table className="table">
              <thead>
                <th className="tabletitle" colspan="7">
                  <h2>輔導老師預約系統-預約完成</h2>
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
                  <th colspan="1">
                    <Link to="/CounselorTeacherReservation2/1">接受預約</Link>
                  </th>
                  <th>預約完成</th>
                </tr>
                <tr className="list">
                  <th>編號</th>
                  <th>班級</th>
                  <th>學生姓名</th>
                  <th>預約日期</th>
                  <th>預約時間</th>
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
