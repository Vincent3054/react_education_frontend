import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
// import "./AdminCoachingrecord.css";拿掉了
import "../Studentdata.css";
import axios from 'axios';

export default class AdminCoachingrecord extends Component {
  state = {
    lab: [],
  };
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Class?Class_Id=${params.id}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),      
      }
    })
      .then((res) => {
        console.log(res.data.Data.DataList);
        const datalist = res.data.Data.DataList;
        this.setState({
          lab: datalist
        }, () => {
          console.log(this.state.lab, 85)
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })

  }

  render() {
    const { role } = this.props;
    console.log(role,12);
    const { lab } = this.state;
    console.log(lab, 100)
    const textlab = lab.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td> {index+1}</td>
          <td> {item.Name} </td>
          <td> {item.Phone} </td>
          <td> {item.ClassName}</td>
          <td> {item.Teacher}</td>
          <td>
            <Link to={`/CoachingStudent/${item.Account}`}>查看</Link>
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
                <th className="tabletitle"  >
                  <h2>學生列表</h2>
                </th>
                <tr className="list">
                  <th>編號</th>
                  <th>學生姓名</th>
                  <th>電話</th>
                  <th>班級</th>
                  <th>導師</th>
                  <th>管理</th>
                </tr>
              </thead>
              <tbody>{textlab}</tbody>
              <tfoot>
                <tr>
                  <td colspan="8" className="foot">
                    <span className="footmain">上一頁</span>
                    <button type="button" className="btn footmain">
                      1
                    </button>
                    <button type="button" className="btn footmain">
                      2
                    </button>
                    <button type="button" className="btn footmain">
                      3
                    </button>
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
