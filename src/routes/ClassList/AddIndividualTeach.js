import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import "./AddIndividualTeach.css";

// import Individual from '../components/Studenlist';

export default class AddIndividualTeach extends Component {
  state = {
    nane: "",
      Category:"",//"輔導類別中輟",
      Title:"",//"輔導標題",
      Content:"",//"輔導內容",
      Abstract:"",//"輔導摘要",
      Category:"",//"諮詢類別"
  };
  render() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/Record?Reservation_Id=2`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
    })
      .then((res) => {
        // console.log(res.data.Data.DataList);
        const datalist = res.data.Data.DataList;
        this.setState({
          classlist: datalist
        }, () => {
          // console.log(this.state.classlist)
        })
      }).catch((err) => {
        // console.error({ err }, 90);
      })

  }



    return (
      <Layout>
        <div className="AddIndividualTeach">
          <div className="body">
            <div className="title">
              <span className="titlename">學生列表</span>
            </div>
            <div className="tablecontent">
            <form className="form" onSubmit={this.handleSubmit}>
              <span className="title">學生姓名</span>
              <div class="close" type="button" onClick={this.alterData}></div>
              <div className="list">
                <span className="list-text">輔導時間</span>
                <input className="input" type="text" onChange={(e) => {
                  this.setState({ Class_Id: e.target.value });
                }}
                  value={Class_Id}></input>
              </div>
              <div className="list">
                <span className="list-text">填寫人</span>
                <input className="input" type="text" onChange={(e) => {
                  this.setState({ Grade: e.target.value });
                }}
                  value={Grade}></input>
              </div>
              <div className="list">
                <span className="list-text">標題</span>
                <input className="input" type="text" onChange={(e) => {
                  this.setState({ ClassName: e.target.value });
                }}
                  value={ClassName}></input>
              </div>
              <div className="list">
                <span className="list-text">類別</span>
                <input className="input" type="text" onChange={(e) => {
                  this.setState({ Teacher: e.target.value });
                }}
                  value={Teacher}></input>
                <div className="list">
                  <span className="list-text">晤談內容</span>
                  <textarea id="message" name="message" placeholder="Your Message to Us" className="input" type="text" onChange={(e) => {
                    this.setState({ Teacher: e.target.value });
                  }}
                    value={Teacher}>
                  </textarea>
                </div>
                <div className="list">
                  <span className="list-text">摘要內容</span>
                  <textarea id="message" name="message" placeholder="Your Message to Us" className="input" type="text" onChange={(e) => {
                    this.setState({ Teacher: e.target.value });
                  }}
                    value={Teacher}>
                  </textarea>
                </div>
                <div className="list">
                  <button className="login-btn" >
                    送出
                  </button>
                </div>
              </form>
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
