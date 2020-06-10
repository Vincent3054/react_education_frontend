import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "../../mixin/main.css";
import "../Studentdata.css";
import { Link } from "react-router-dom";
export default class AdminReservation3 extends Component {
  state = {
    Reservation:[],
    Class_Id: "",//代號 缺名稱
    Account: "",//帳號 缺名子
    Period: "",
    Time: "",//v
    Date:"",//要改小寫
    NowPSY: "",//v
    BeforePSY: "",//v
    TeacherRemarks: "",//v
    StudentsRemarks: "",//v
    //少type欄位
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/StatusRecord?Fettle=3`, {
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
    const textstudent = Reservation.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td>{index+1}</td>
          <td>{item.Class_Id}</td>
          <td>{item.Account}</td>
          <td>{item.Date}</td>
          <td>{item.Time}</td>
          <td>{item.StudentsRemarks}</td>
          <td>{item.TeacherRemarks}</td>
          <td>{item.NowPSY}指派完成</td>
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
                  <h2>管理者預約系統-指派完成</h2>
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
                  <th colspan="2">
                    <Link to="/AdminReservation1/1">未指派</Link>
                  </th>
                  <th colspan="1">
                    <Link to="/AdminReservation2/1">正在指派</Link>
                  </th>
                  <th>指派完成</th>
                </tr>
                <tr className="list">
                  <th>編號</th>
                  <th>班級</th>
                  <th>學生姓名</th>
                  <th>預約日期</th>
                  <th>預約時間</th>
                  <th>學生備註</th>
                  <th>老師備註</th>
                  <th>指派狀態</th>
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
