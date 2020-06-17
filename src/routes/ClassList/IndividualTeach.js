import React, { Component } from "react";
import axios from 'axios';
import Layout from "../../layouts/Layout";
import "./IndividualTeach.css";

// import Individual from '../components/Studenlist';
export default class IndividualTeach extends Component {
  state = {
    lab: [],
    Content: "",
    Title:"",
    Category: "",
    Abstract: "",
    A_Id:"",

  };
  componentDidMount(){
    const { match } = this.props;
    const { params } = match;
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/ReccordList?A_Id=${params.id}`, {
       headers: {
         Authorization: JSON.parse(localStorage.getItem("Token")),
       }
     })
       .then((res) => {
         console.log(res);
         const dataone = res.data.Data;
         this.setState({
           lab: dataone,
           Content:dataone.Content,
           Title:dataone.Title,
           Category:dataone.Category,
           Abstract:dataone.Abstract,
         })
       }).catch((err) => {
         console.error(err);
       })
  }
  handleSubmit = (e) => {
    const { match } = this.props;
    const { params } = match;
    const {
      Category,
      Title,
      Content,
      Abstract,
    } = this.state;
    const payload = {
      Category,
      Title,
      Content,
      Abstract,
    };
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Record?A_Id=${params.id}`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data.Message);
          this.props.history.goBack();
        })
        .catch((error) => {
          console.log(error,123)
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status);
          const err = JSON.parse(error.request.response);
          //錯誤訊息
          alert(err.Message);
        });
  };
  render() {
    const { lab ,Title,Category,Content,Abstract} = this.state;
    return (
      <Layout>
        <div className="IndividualTeach">
          <div className="body">
            <div className="title">
              <span className="titlename">學生列表</span>
            </div>
            <div className="con">
              <div className="tablecontent">
                <from>
                    <tr >
                      <td>紀錄編號：</td>
                      <td>{lab.A_Id}</td>
                      <td>學生姓名</td>
                      <td>{lab.Name}</td>
                      <td>輔導時間</td>
                      <td>{lab.CreateTime}</td>
                      <td>填寫人</td>
                      <td>{lab.KeyinTeacher}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">標題</td>
                      <td colSpan="2">
                        <input text="type" onChange={(e) => {
                          this.setState({ Title: e.target.value });
                        }}
                        value={Title} />
                      </td>
                      <td colSpan="2">類別</td>
                      <td colSpan="2">
                        <input text="type"  onChange={(e) => {
                          this.setState({ Category: e.target.value });
                        }}
                        value={Category} />
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="8">晤談內容</th>
                    </tr>
                    <tr>
                      <td colSpan="8">
                      <textarea id="message" name="message" onChange={(e) => {
                        this.setState({ Content: e.target.value });
                       }}
                      value={Content}  ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="8">摘要內容</th>
                    </tr>
                    <tr>
                      <td colSpan="8">
                      <textarea id="message" name="message" onChange={(e) => {
                        this.setState({ Abstract: e.target.value });
                      }}
                      value={Abstract} ></textarea>
                      </td>
                    </tr>
                    <div className="btnsend">
                      <button className="button button5"  onClick={this.handleSubmit}>儲存變更</button>
                    </div>
                  </from>
              </div>
            </div>    
          </div>
        </div>
      </Layout>
    );
  }
}
   
