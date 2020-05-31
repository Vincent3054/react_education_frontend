import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import "./AdminCoachingrecord.css";
import axios from 'axios';

export default class AdminCoachingrecord extends Component {
  state = {
    lab: [
      
    ],
  };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Class?Class_Id=${params.id}`, {
      headers: {
        "Authorization":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50IjoicGVycnkxMDA1IiwiUm9sZSI6IlAwMDMsUDAwNCxQMDA4LFAwMDksUDAxMCxQMDExLFAwMTIsUDAxMyxQMDE0LFAwMTUsUDAxNixQMDE3LFAwMTgsIiwiRXhwaXJlIjoiMjAyMC82LzEg5LiL5Y2IIDA3OjM2OjM0In0.m8ZhcsFl6gIieytyLs229Os1WDl5Or9xgM_wvp2s-gsbXnhiolreo-UjQotj3fA6-o-ZHIFSeHId5bxGrgYcZw"
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
    const { lab } = this.state;
    console.log(lab, 100)
    // const data = lab.filter((item, index, array) => {
    //   return item.class === parseInt(params.id);
    // });

    const textlab = lab.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td> {item.Name} </td>
          <td> {item.Class_Id} </td>
          <td> {item.Grade}</td>
          <td> {item.ClassName}</td>
          <td>
            {" "}
            <Link to="/CoachingStudent/1">查看</Link>
          </td>
        </tr>
      );
    });

    return (
      <Layout>
        <div className="AdminCoachingrecord">
          <div className="title">
            <span className="titlename">學生列表</span>
            <table className="table">
              <thead>
                <tr>
                  <td colSpan="8" className="theadstart">
                    <label>search：</label>
                    <input type="text" />
                  </td>
                </tr>
                <tr className="list">
                  <th>學生姓名</th>
                  <th>電話</th>
                  <th>班級</th>
                  <th>導師</th>
                  <th></th>
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
