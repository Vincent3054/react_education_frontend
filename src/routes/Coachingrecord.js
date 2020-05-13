import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Studentdata.css';
import indeximg from '../Assets/1926.jpg';

export default class Coachingrecord extends Component {
  state = {
    lab: [
      {
        name: "AAA",
        gender: "男",
        phone: "0988295638",
        class: 101,
        remarks: "高關懷"
      },
      {
        name: "AAA",
        gender: "女",
        phone: "0988295638",
        class: 102,
        remarks: "弱勢"
      },
      {
        name: "ADA",
        gender: "女",
        phone: "0988295638",
        class: 103,
        remarks: "低收"
      },
      {
        name: "EAA",
        gender: "男",
        phone: "0988295638",
        class: 202,
        remarks: "單親"
      },
      {
        name: "AMA",
        gender: "男",
        phone: "0988295638",
        class: 202,
        remarks: "高關懷"
      },
      {
        name: "AWA",
        gender: "女",
        phone: "0988295638",
        class: 202,
        remarks: "低收"
      },
      {
        name: "BBA",
        gender: "女",
        phone: "0988295638",
        class: 202,
        remarks: "高關懷"
      },
      {
        name: "CA",
        gender: "男",
        phone: "0988295638",
        class: 202,
        remarks: ""
      },

    ]
  }
  render() {

    const { match } = this.props;
    const { params } = match;
    const { lab } = this.state;
    const data = lab.filter((item, index, array) => {
      return item.class === parseInt(params.id);
    })

    const textlab = data.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td> {index} </td>
          <td> {item.class} </td>
          <td> {item.name}</td>
          <td> {item.gender}</td>
          <td> {item.remarks}</td>
          <td> {item.remarks}</td>
          <td> <Link to="/Individual/1">查看</Link></td>
        </tr>
      );
    })

    return (
      <Layout>
        <div className="Studentdata">
          <div className="title">
          <span className="titlename">學生列表</span>
            <table className="table">
              <thead>
              <tr>
              <td colSpan="8" className="theadstart">
              <label>search：</label><input type="text" />
              </td>
              </tr>
                <tr className="list">
                  <th>紀錄編號</th>
                  <th>學生姓名</th>
                  <th>輔導時間</th>
                  <th>填寫人</th>
                  <th>類別</th>
                  <th>標題</th>
                  <th>摘要</th>

                </tr>
              </thead>
              <tbody>
                {textlab}
              </tbody>
              <tfoot>
              <tr >
              <td colspan="8" className="foot">
              <span  className="footmain">上一頁</span>
              <button type="button" className="btn footmain">1</button>
              <button type="button" className="btn footmain">2</button>
              <button type="button" className="btn footmain">3</button>
              <span className="footmain">下一頁</span>
              </td>
              </tr>

              </tfoot>

            </table>
          </div>
        </div>
      </Layout>
    );
  }
}