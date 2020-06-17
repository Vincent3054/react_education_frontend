
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "../../mixin/main.css";
import "../Studentdata.css";
export default class CounselorTeacherReservation3 extends Component {
  state = {
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
              <Link style={{color:"#FFF",textDecoration:"none"}} to={`/AddIndividualTeach/${item.Reservation_Id}`}>填寫輔導紀錄</Link>
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
                <th className="tabletitle" colspan="8">
                  <h2>輔導老師預約系統-預約完成</h2>
                </th>
                <tr>
                  <th colspan="1">
                    <Link className="title_Link" to="/CounselorTeacherReservation2/1">接受預約</Link>
                  </th>
                  <th className="title_Linking">預約完成</th>
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
