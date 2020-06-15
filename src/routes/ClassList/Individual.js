import React, { Component } from "react";
import axios from 'axios';
import Layout from "../../layouts/Layout";
import "./Individual.css";
// import Individual from '../components/Studenlist';

export default class Individual extends Component {
  state = {
    lab: [],
  };
  componentDidMount(){
    const { match } = this.props;
    const { params } = match;
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/ReccordList?A_Id=${params.id} `, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
    })
      .then((res) => {
        console.log(res,25);
        const dataone = res.data.Data;
        this.setState({
          lab: dataone
        })
      }).catch((err) => {
        console.error(err);
      })
  }
  render() {
    const { lab } = this.state;
    console.log(lab,123);
    return (
      <Layout>
        <div className="Individual">
          <span className="titlename">個人輔導紀錄</span>
          <div className="body">
            <div className="con">
            <div className="tablecontent">
            <table>
              <tr>
                <th>紀錄編號</th>
                <th>{lab.A_Id}</th>
                <th>學生姓名</th>
                <th>暫放</th>
                <td>輔導時間</td>
                <th>{lab.CreateTime}</th>
                <td>填寫人</td>
                <th>{lab.KeyinTeacher}</th>
              </tr>
              <tr>
                <td colSpan="2">標題</td>
                <td colSpan="2">{lab.Title}</td>
                <td colSpan="2">類別</td>
                <td colSpan="2">{lab.Category}</td>
              </tr>
              <tr>
                <th colSpan="8">晤談內容</th>
                <th>{lab.Content}</th>
              </tr>
              <tr>
                <td colSpan="8"></td>
              </tr>
              <tr>
                <th colSpan="8">摘要內容</th>
              </tr>
              <tr>
                <td colSpan="8"></td>
              </tr>
            </table>
          </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
//    <div className="btnsend">
//                     <button className="button button5">儲存變更</button>
//                     </div>
