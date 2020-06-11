import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import "../../mixin/main.css";
import "../Studentdata.css";
import "./StudentReservation.css";
import { Link } from "react-router-dom";
import Correctfrom from "../../Assets/EmailValidate_check.png";
export default class AdminReservation1 extends Component {
  state = {
    //控制
    ac: false,
    comp: false,
    //資料列表
    Reservation:[],
    //老師列表
    CounselorTeacher:[],
    //指派老師
    NowPSY:"",
    
  };
  componentDidMount() {
    this.git();
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminTeacher?Role_Id=R003`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("Token")),
    }
    })
    .then((res) => {
      console.log(res.data.Data.DataList,12);
      const datalist = res.data.Data.DataList;
      this.setState({
        CounselorTeacher: datalist
      })
    }).catch((err) => {
      console.error({ err }, 91);
    })
  }
  git(){
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/StatusRecord?Fettle=1`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        console.log(res);
        const datalist = res.data.Data.DataList;
        this.setState({
          Reservation: datalist
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })
  }
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
  handleSubmit = (e,Reservation_Id) => {
    const {
      NowPSY
    } = this.state;
    const payload = {
      NowPSY
    };
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Reservation/?Reservation_Id=${Reservation_Id}`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res);
          alert(res.data.Message);
          this.git();
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
    
  render() {
    const { ac, comp,Reservation,CounselorTeacher,NowPSY} = this.state;
    const CounselorTeacherList = CounselorTeacher.map((item, index, array) => {
      return (
          <option key={index} value={item.Account}>{item.Name}</option>
      );
    });
   
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
          <td>{item.BeforePSY}</td>
          <td>
            <select 
              className="input" 
              onChange={(e) => {
              this.setState({NowPSY: e.target.value },
                (e)=>{console.log(this.state.NowPSY)});
              }}
              value={NowPSY}
            >
              {CounselorTeacherList}
            </select>
          </td>
          <td className="td-btn">
            <button
              type="button"
              className="btn"
              style={{ width: "100px" }}
              onClick={this.alterData}
            >
              修改
            </button>
            <button type="button" className="btn" style={{ width: "100px" }} onClick={e=>{this.handleSubmit(e,item.Reservation_Id)}} >
              指派老師
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
                  <form className="form">
                    <span className="title">編輯</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
          
                    <div className="list">
                      <span className="list-text">預約日期：</span>
                      <input className="input" type="date"  />
                    </div>
                    <div className="list">
                      <span className="list-text">預約時間：</span>
                      <input className="input" type="time"></input>
                    </div>
                    <div className="list">
                      <span className="list-text">諮詢類別：</span>
                      <select className="input">
                        <option value="學業">學業</option>
                        <option value="家庭">家庭</option>
                        <option value="感情">感情</option>
                        <option value="其他">其他</option>
                      </select>
                    </div>
                    <div className="list">
                      <button className="login-btn" onClick={this.comp}>
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
                <th className="tabletitle" colspan="8">
                  <h2>管理者預約系統-未指派</h2>
                </th>
                <th className="tablecursor" colspan="3">
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
                  <th colspan="2">未指派</th>
                  <th colspan="1">
                    <Link to="/AdminReservation2/1">正在指派</Link>
                  </th>
                  <th>
                    <Link to="/AdminReservation3/1">指派完成</Link>
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
                  <th>上次指派</th>
                  <th>指派老師</th>
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
