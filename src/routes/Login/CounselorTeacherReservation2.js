import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "../../mixin/main.css";
import "../Studentdata.css";
import "../Reservation/StudentReservation.css";
import { Link } from "react-router-dom";
import Correctfrom from "../../Assets/EmailValidate_check.png";
export default class CounselorTeacherReservation2 extends Component {
  state = {
    //控制
    ac: false,
    comp: false,
    //資料列表
    Reservation:[],
    //修改預約
    Date:"",
    Time:"",
    TeacherRemarks:"",
  };
  componentDidMount() {
   this.get();
  };

  get(){
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/PSYStatusRecord?Fettle=2 `, {
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
  }
  handleSubmit = (e,Reservation_Id,Check) => {
    const payload = { CheckCancel:Check};
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/PSYReservation/?Reservation_Id=${Reservation_Id}`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res);
          alert(res.data.Message);
          this.get();
        })
        .catch((error) => {
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status);
          const err = JSON.parse(error.request.response);
          //錯誤訊息
          alert(err.Message);
        });
  };
  handleEdit = (e) => {
    const {Reservation_Id,Date,Time,TeacherRemarks} = this.state;
    const payload = { Reservation_Id,Date,Time,TeacherRemarks};
    console.log(TeacherRemarks);
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/StatusRecord`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res);
          // alert(res.data.Message);
          this.comp();
          this.get();
        })
        .catch((error) => {
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status);
          const err = JSON.parse(error.request.response);
          //錯誤訊息
          alert(err.Message);
        });
  };
  alterData = (Id) => {
    const { ac } = this.state;
    if (ac === false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
    this.setState({
      Reservation_Id:Id,
    })
  };
  comp = () => {
    const { comp} = this.state;
    if (comp === false) {
      this.setState({ comp: true });
      this.setState({ ac: false });
    } else {
      this.setState({ comp: false });
    }
  };

  render() {
    const { ac, comp } = this.state;
    const{Reservation}=this.state;
    const {Date,Time,TeacherRemarks}=this.state;
    const textstudent = Reservation.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
        <td>{index+1}</td>
        <td>{item.Class_Name}</td>
        <td>{item.Name}</td>
        <td>{item.Date}</td>
        <td>{item.Time}</td>
        <td>{item.StudentsRemarks}</td>
        <td>{item.TeacherRemarks}</td>
          <td className="td-btn">
            <button
              type="button"
              className="btn"
              style={{ width: "80px" }}
              onClick={e=>{this.alterData(item.Reservation_Id)}}
            >
              修改
            </button>
            <button type="button" className="btn" style={{ width: "80px" }} onClick={e=>{this.handleSubmit(e,item.Reservation_Id,1)}}>
              取消
            </button>
            <button type="button" className="btn" style={{ width: "80px" }} onClick={e=>{this.handleSubmit(e,item.Reservation_Id,0)}}  >
              接受
            </button>
          </td>
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
                    <span className="title">編輯成功</span>
                    <div style={{ textAlign: "center", display: "block" }}>
                      <img
                        src={Correctfrom}
                        alt="錯誤"
                        title="Error"
                        style={{ width: "140px" }}
                      />
                    </div>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <span>恭喜您編輯成功!</span>
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
                  <form className="form" onSubmit={this.handleEdit}>
                    <span className="title">編輯</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
                    <div className="list">
                      <span className="list-text">預約日期：</span>
                      <input className="input" type="date"  onChange={(e) => {
                        this.setState({ Date: e.target.value });
                      }}
                      value={Date}/>
                    </div>
                    <div className="list">
                      <span className="list-text">預約時間：</span>
                      <input className="input"
                        type="time"
                        onChange={(e) => {
                        this.setState({ Time: e.target.value });
                         }}
                        value={Time}                    
                      />
                    </div>
                    <div className="list">
                      <span className="list-text">老師備註：</span>
                      <textarea
                        className="input"
                        style={{ height: "100px" }}
                        onChange={(e) => {
                          this.setState({ TeacherRemarks: e.target.value });
                           }}
                        value={TeacherRemarks} 
                      ></textarea>
                    </div>
                    <div className="list">
                      <button className="login-btn">
                        送出
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
                <th className="tabletitle" colspan="7">
                  <h2>輔導老師預約系統-接受預約</h2>
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
                <tr>
                  <th colspan="1">接受預約</th>
                  <th>
                    <Link to="/CounselorTeacherReservation3/1">預約完成</Link>
                  </th>
                </tr>
                <tr className="list">
                  <th>編號</th>
                  <th>班級</th>
                  <th>學生姓名</th>
                  <th>預約日期</th>
                  <th>預約時間</th>
                  <th>學生備註</th>
                  <th>老師備註</th>
                  <th>管理</th>
                </tr>
              </thead>
              <tbody>{textstudent}</tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}
