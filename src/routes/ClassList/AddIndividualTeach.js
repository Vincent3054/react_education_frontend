import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "./AddIndividualTeach.css";
export default class AddIndividualTeach extends Component {
  state = {
    Title:"",
    Content:"",
    Abstract:"",
    Category:"",
  }
  handleSubmit = (e) => {
    const { match } = this.props;
    const { params } = match;
    const { Title, Content,Abstract,Category} = this.state;
    const payload = {Title, Content,Abstract,Category};
    console.log(params.id);
    if (Title === "" || Content === ""|| Abstract === ""||  Category === "") 
    {
      alert("欄位不可空白");
    } else {
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Record?Reservation_Id=${params.id} `, payload,{
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          }
        })
        .then((res) => {
          console.log(res,24);
          alert(res.data.Message);
          this.props.history.push("/CounselorTeacherReservation3/1");
        })
        .catch((error) => {
          console.log({error},32);
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status);
          const err = JSON.parse(error.request.response);
          //錯誤訊息
          alert(err.Message);
        });
      }
    
  };
  render() {
    const { Category,Title,Content,Abstract,CreateTime} = this.state;
    return (
      <Layout>
        <div className="AddIndividualTeach">
        <div className="titlename" ><span>個人輔導紀錄</span></div>
          <div className="body" >
            <form action="get.php" method="get" onSubmit={this.handleSubmit}>
              <div className="level">
                <span>姓名</span>
                <br />
              </div>
              <div className="level">
                <span>電話</span>
                <br />
              </div>
              <div className="level">
                <span>填寫人</span>
                <br />
              </div>
              <div className="level">
                <span>標題</span>
                <input type='text'
                  onChange={(e) => {
                    this.setState({ Title: e.target.value });
                  }}
                  value={Title} />
                <br />
              </div>
              <div className="level">
              <span>類別</span>
              <select id="country" name="country"  
                onChange={(e) => {
                  this.setState({ Category: e.target.value });
                }}
                value={Category}>
                <option></option>
                <option value="usa">Australia</option>
                <option value="usa">Canada</option>
                <option value="usa">USA</option>
              </select>
              <span>輔導日期</span>
              <br />
              </div>
             
              <span className="titname">晤談內容</span>
              <textarea 
                id="w3review" 
                name="w3review" 
                rows="4" 
                cols="50"
                onChange={(e) => {
                  this.setState({ Content: e.target.value });
                }}
                value={Content}
              >
              </textarea><br />
              <span>摘要內容</span>
              <textarea 
                id="w3review"
                name="w3review" 
                rows="4" 
                cols="50"
                onChange={(e) => {
                  this.setState({ Abstract: e.target.value });
                }}
                value={Abstract}
              >
              </textarea><br />
              <button className="btn">送出</button>
              
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
//    <div className="btnsend">
//                     <button className="button button5">儲存變更</button>
//                     </div>
