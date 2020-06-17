import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "../../mixin/main.css";
import "../Studentdata.css";
import { Link } from "react-router-dom";
export default class ClassTeacherReservation1 extends Component {
  state = {
    //資料列表
    Reservation:[],
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/StatusRecord?Fettle=1`, {
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
  }
  render() {
    const{Reservation}=this.state;
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
          <td>{item.BeforePSY}</td>
          <td>等待管理員指派中</td>
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
                  <h2>班導預約系統-未指派</h2>
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
                  <th className="title_Linking" colspan="2">未指派</th>
                  <th colspan="1">
                    <Link className="title_Link" to="/ClassTeacherReservation2/1">正在指派</Link>
                  </th>
                  <th>
                    <Link className="title_Link" to="/ClassTeacherReservation3/1">指派完成</Link>
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
                  <th>上次指派老師</th>
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
