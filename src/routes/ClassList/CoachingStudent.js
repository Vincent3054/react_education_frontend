import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import "./CoachingStudent.css";
import user from "../../Assets/user.png";


export default class CoachingStudent extends Component {
  state = {
    person: [],
    lab:[],
  };
  //接api 23 帶StudentAccount近來
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    //api23
     axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Record?StudentAccount=${params.id} `, {
       headers: {
         Authorization: JSON.parse(localStorage.getItem("Token")),
       }
     })
       .then((res) => {
         console.log(res,25);
         const dataone = res.data.Data.DataList;
         this.setState({
           lab: dataone
         })
       }).catch((err) => {
         console.error(err);
       })
    //api34
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/BasicAll?Account=${params.id}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
    })
      .then((res) => {
        const datatwo = res.data;
        this.setState({
          person: datatwo
        })
      }).catch((err) => {
        console.error({ err });
      })
  }

  render() {
    const { person } = this.state;
    const { lab } = this.state;
     const textlab = lab.map((item, index, array) => {
       return (
         <tr className="list-body" key={index}>
           <td>{item.A_Id}</td>
           <td>{item.KeyinTeacher} </td>
           <td>{item.Category}</td>
           <td>{item.Title}</td>
           <td>{item.Content}</td>
           <td>
             <Link to="/IndividualTeach/1">編輯</Link>｜
             <Link to={`/Individual/${item.A_Id}`}>查看</Link>
           </td>
         </tr>
       );
     });
 
    return (
      <Layout>
        <div className="CoachingStudent">
        <div className="content">
          <div className="user">
            <img src={user} className="userimg" />
          </div>
          <span className="titlename">學生列表</span>
          <div className="main">
            <div className="boxone">
              <span className="font">姓名</span>
              <span className="font">：</span>
              <span className="font">{person.Name}</span>
            </div>
            <div className="boxtwo">
              <span className="font">聯絡電話</span>
              <span className="font">：</span>
              <span className="font">{person.Phone}</span>
            </div>
            <div className="boxthree">
              <span className="font">電子郵件</span>
              <span className="font">：</span>
              <span className="font">{person.Email}</span>
            </div>
            <div className="boxfour">
              <span className="font">性別</span>
              <span className="font">：</span>
              <span className="font">{person.Sex}</span>
            </div>
          </div>
          </div>
          <table className="table">
            <thead>
              <tr className="list">
                <th>編號</th>
                <th>填寫人</th>
                <th>類別</th>
                <th>標題</th>
                <th>摘要</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>{textlab}</tbody>
            <tfoot>
              <tr>
                <td colSpan="8" className="foot">
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
      </Layout>

    );
  }
}
