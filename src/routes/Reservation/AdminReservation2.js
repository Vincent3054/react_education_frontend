import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "../../mixin/main.css";
import "../Studentdata.css";
import { Link } from "react-router-dom";
export default class AdminReservation2 extends Component {
  state = {
    Reservation:[],
    Class_Id: "",//代號 缺名稱
    Account: "",//帳號 缺名子
    Period: "",
    Time: "",//
    Date:"",//要改小寫
    NowPSY: "",//
    BeforePSY: "",//
    TeacherRemarks: "",//
    StudentsRemarks: "",//
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/StatusRecord?Fettle=2`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        console.log(res.data.Data.DataList);
        const datalist = res.data.Data.DataList;
        this.setState({
          Reservation: datalist
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })
  };

  render() {
    const {Reservation}=this.state;
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
          <td>等待{item.NowPSY}指派中</td>
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
                  <h2>管理者預約系統-正在指派</h2>
                </th>
                
                <tr>
                  <th colspan="2">
                    <Link className="title_Link" to="/AdminReservation1/1" >未指派</Link>
                  </th>
                  <th colspan="1"  className="title_Linking">正在指派</th>
                  <th>
                    <Link className="title_Link" to="/AdminReservation3/1">指派完成</Link>
                  </th>
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
