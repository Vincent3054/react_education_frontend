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
    return (
      <Layout>
        <div className="Individual">
          <div className="titlename"> <span>個人輔導紀錄</span></div>
          <div className="content">
          <div className="m">
            <div className="level">
              <div className="tit">
                姓名
            </div>
              <div className="mycontent">
                {lab.Name}
              </div>
              <div className="tit">
                電話
            </div>
              <div className="mycontent">
                {lab.phone}
              </div>
            </div>


            <div className="level">
              <div className="tit">
                類別
              </div>
              <div className="mycontent">
                {lab.Category}
              </div>

              <div className="tit">
                輔導日期
              </div>
              <div className="mycontent">
                {lab.CreateTime}
              </div>
            </div>
          </div>


          <div className="n">
            <div className="level">
              <div className="titbig">
                標題
              </div>
              <div className="mycontentbig">
                {lab.Title}
              </div>
            </div>

            <div className="level">
              <div className="titbig">
                填寫人
              </div>
              <div className="mycontentbig">
                {lab.KeyinTeacher}
              </div>
            </div>

            <div className="level">
              <div className="titbig">
                晤談內容
              </div>
              <div className="mycontentbig">
                {lab.Content}
              </div>
            </div>

            <div className="level">
              <div className="titbig">
                摘要內容
              </div>
              <div className="mycontentbig">
                {lab.Content}
              </div>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    );
  }
}
