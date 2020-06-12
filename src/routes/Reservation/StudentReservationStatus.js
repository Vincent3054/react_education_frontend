import React, { Component } from "react";
import axios from "axios";
import Layout from "../../layouts/Layout";
import "../../mixin/main.css";
import "../Studentdata.css";
import "../Login/Register.css";
import "./StudentReservation.css";
import Correctfrom from "../../Assets/EmailValidate_check.png";

export default class StudentReservationStatus extends Component {
  state = {
    //控制
    ac: false,
    comp: false,
    Period:"",
	  Time:"",
	  Date:"",
    StudentsRemarks:"",
    Category:"",
    //資料列表
    Reservation:[],
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/StatusRecord?Fettle=1`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        console.log(res.data.Data.DataList);
        const datalist = res.data.Data.DataList;
        this.setState({
          Reservation: datalist
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })
  };
  alterData = () => {
    const { ac } = this.state;
    if (ac === false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
  };
  comp = () => {
    const { comp } = this.state;
    if (comp === false) {
      this.setState({ comp: true });
      this.setState({ ac: false });
    } else {
      this.setState({ comp: false });
    }
  };
  //目前有bug 待研究
  stopPropagation(e) {
    e.nativeEvent.stopImmediatePropagation();
  }
  handleSubmit = (e) => {
    const {
      Period,
	    Time,
	    Date,
      StudentsRemarks,
    } = this.state;
    const payload = {
      Period,
	    Time,
	    Date,
      StudentsRemarks,
    };
    if (
      Period=== "" || Time=== "" ||Date=== "" 
    ) 
    {
      alert("欄位不可空白");
    }
    else {
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Reservation `, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res.data);
          // alert(res.data.Message);
          this.comp();
        })
        .catch((error) => {
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
    const{ 
      Period,
	    Time,
	    Date,
      StudentsRemarks,
    }=this.state;
    const { ac, comp } = this.state;
    const { Reservation } = this.state;
    const textstudent = Reservation.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td>{index+1}</td>
          <td>{item.Class_Name}</td>
          <td>{item.Name}</td>
          <td>{item.Date}</td>
          <td>{item.Time}</td>
          <td>{item.StudentRemasks}</td>
          <td>預約成功</td>
        </tr>
      );
    });

    return (
      <Layout>
        <div className="StudentReservation">
          <div className={comp ? `limiter` : `limiter-mone`}>
            <div className="background">
              <div className="container">
                <div className="wrap-comp">
                  <form className="form">
                    <span className="title">預約成功</span>
                    <div style={{ textAlign: "center", display: "block" }}>
                      <img
                        src={Correctfrom}
                        alt="成功"
                        title="ocmp"
                        style={{ width: "140px" }}
                      />
                    </div>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <span>恭喜您預約成功!</span>
                    </div>
                    <div className="list">
                      <button className="login-btn" onClick={this.comp}>
                        回去查看
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="StudentReservation">
          <div className={ac ? `limiter` : `limiter-mone`}>
            <div className="background">
              <div className="container">
                <div className="wrap">
                  <form className="form" onSubmit={this.handleSubmit}>
                    <span className="title">預約</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
                    <div className="list">
                      <span className="list-text">預約日期：</span>
                      <input className="input" type="date"  onChange={(e) => {
                        this.setState({ Date: e.target.value });
                      }}
                      value={Date}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">預約時段：</span>
                      <select className="input"  onChange={(e) => {
                        this.setState({ Period: e.target.value });
                      }}
                      value={Period}>
                        <option></option>
                        <option value="早上">早上</option>
                        <option value="中午">中午</option>
                        <option value="下午">下午</option>
                        <option value="晚上">晚上</option>
                      </select>
                    </div>
                    <div className="list">
                      <span className="list-text">預約時間：</span>
                      <input className="input" type="time" onChange={(e) => {
                        this.setState({ Time: e.target.value });
                      }}
                      value={Time}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">諮詢內容：</span>
                      <textarea
                        className="input"
                        style={{ height: "100px" }}
                        onChange={(e) => {
                          this.setState({ StudentsRemarks: e.target.value });
                        }}
                        value={StudentsRemarks}></textarea>
                    </div>
                    <div className="list">
                      <button className="login-btn" >
                        預約
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Studentdata">
          <div className="title">
            <table className="table">
              <thead>
                <th className="tabletitle" colspan="5">
                  <h2>學生預約系統</h2>
                </th>
                <th className="tablecursor" colspan="2">
                  <div class="demo">
                    <span>搜尋：</span>
                    <input
                      className="text"
                      type="text"
                      placeholder="輸入文字"
                    />
                  </div>
                </th>
                <tr className="list">
                  <th>編號</th>
                  <th>班級</th>
                  <th>學生姓名</th>
                  <th>預約日期</th>
                  <th>預約時間</th>
                  <th>學生備註</th>
                  <th>預約狀態</th>
                </tr>
              </thead>
              <tbody>{textstudent}</tbody>
            </table>
            <div>
              <button
                onClick={this.alterData}
                className="btn"
                style={{ width: "100px" }}
              >
                預約
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
