import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import './Studentdata.css';
import { Link } from 'react-router-dom';
export default class AdminReservation1 extends Component {
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
    ]
  }
  render() {

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
            {item.Class_Id}
          </td>
          <td>
            {item.Name}
          </td>
          <td>
            {item.date}
          </td>
          <td>
            {item.Time}
          </td>
          <td>
            {item.type}
          </td>
          <td>
            {item.StudentRemasks}
          </td>
          <td>
            {item.TeacherRemasks}
          </td>
          <td>
            <div className="list" style={{ lineHeight: "0px" }}>
              <select className="input">
                <option value="老師0">上次指派:{item.BeforePSY}</option>
                <option value="老師1">{item.NowPSY}</option><option value="老師2">{item.NowPSY}</option><option value="老師3">{item.NowPSY}</option>
              </select>
            </div>
          </td>
          <td className="td-btn">
            <button type="button" className="btn" style={{ width: "100px" }}>修改</button>
            <button type="button" className="btn" style={{ width: "100px" }}>指派老師</button>
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
                <th className="tabletitle" colspan="8"><h2>管理者預約系統-未指派</h2></th>
                <th className="tablecursor" colspan="2">
                  <div class="demo">
                    <span>搜尋：</span>
                    <input className="text" type="text" placeholder="輸入文字" />
                  </div>
                </th>
                <tr>
                  <th colspan="2">未指派</th>
                  <th colspan="1"><Link to="/AdminReservation2/1">正在指派</Link></th>
                  <th><Link to="/AdminReservation3/1">指派完成</Link></th>
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
                  <th>指派老師</th>
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
