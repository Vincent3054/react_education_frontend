import React, { Component } from "react";
import axios from "axios";
import Layout from "../layouts/Layout";
import "../mixin/main.css";
import "./Studentdata.css";
import "./Reservation/StudentReservation.css";
import Correctfrom from "../Assets/EmailValidate_check.png";
export default class StudentManagement extends Component {
  state = {
    ac: false,
    comp: false,
    Account:"",
    Name: "",
    Email: "",
    Phone: "",
    Sex: "",
    Class_Id: "",
    Grade: "",
    ClassName: "",
    Teacher: "",
    studentAll:[],
  };
  componentDidMount() {
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminAll`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("Token")),
    }
    })
    .then((res) => {
      console.log(res.data.Data.All);
      const datalist = res.data.Data.All;
      this.setState({
        studentAll: datalist
      }, () => {
        // console.log(this.state.classlist)
      })
    }).catch((err) => {
      console.error({ err }, 90);
    })
  }
  handleSubmit = (e) => {
    // const { data,git} = this.props;
    const {
    Name,
	  Email,
	  Phone,
	  Sex,
	  Class_Id
    } = this.state;
    const payload = {
      Name,
	    Email,
	    Phone,
	    Sex,
	    Class_Id
    };
    //Account 帶Account 近來api
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Student?Account={uerry1005}`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res);
          // alert(res.data.Message);
          this.comp();
          // git();
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
  alterData = () => {
    const { ac } = this.state;
   
    if (ac === false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
  };
  comp = () => {
    const { comp, ac } = this.state;
    if (comp == false) {
      this.setState({ comp: true });
      this.setState({ ac: false });
    } else {
      this.setState({ comp: false });
    }
  };
  render() {
    const {Name,Email,Phone,Class_Id}=this.state;
    const { ac, comp, studentAll } = this.state;
    const textstudent = studentAll.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td>{item.Account}</td>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Sex}</td>
          <td>{item.Class_Id}</td>
          <td>{item.ClassName}</td>
          <td>{item.Grade}</td>
          <td>{item.Teacher}</td>
          <td className="td-btn">
            <button
              type="button"
              className="btn"
              onClick={this.alterData}
              style={{ width: "100px" }}
            >
              編輯
            </button>
            <button type="button" className="btn" style={{ width: "100px" }}>
              刪除
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
                  <form className="form" onSubmit={this.handleSubmit}>
                    <span className="title">編輯</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
                    <div className="list">
                    <span className="list-text">性別</span>
                    <input
                      type="radio"
                      name="gender"
                      value="男"
                      id="male"
                      onChange={(e) => {
                        this.setState({ Sex: e.target.value });
                      }}
                    />
                    <label for="male">男</label>
                    <input
                      type="radio"
                      name="gender"
                      value="女"
                      id="female"
                      onChange={(e) => {
                        this.setState({ Sex: e.target.value });
                      }}
                    />
                    <label for="female">女</label>
                  </div>
                    <div className="list">
                      <span className="list-text">姓名：</span>
                      <input className="input" type="text"  onChange={(e) => {
                        this.setState({ Name: e.target.value });
                      }}
                      value={Name}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">電子信箱：</span>
                      <input className="input" type="email"  onChange={(e) => {
                        this.setState({ Email: e.target.value });
                      }}
                      value={Email}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">電話：</span>
                      <input className="input" type="tel"  onChange={(e) => {
                        this.setState({ Phone: e.target.value });
                      }}
                      value={Phone}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">班級代號：</span>
                      <select className="input" onChange={(e) => {
                        this.setState({ Class_Id: e.target.value });
                      }}
                      value={Class_Id}>
                        <option ></option>
                        <option value="C101">C101</option>
                        <option value="C102">C102</option>
                        <option value="C103">C103</option>
                        <option value="C104">C104</option>
                        <option value="C105">C105</option>
                        <option value="C106">C106</option>
                        <option value="C107">C107</option>
                        <option value="C108">C108</option>
                        <option value="C109">C109</option>
                        <option value="C110">C110</option>
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
                <th className="tabletitle" colspan="7">
                  <h2>學生管理系統</h2>
                </th>
                <th className="tablecursor" colspan="4">
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
                  <th>帳號</th>
                  <th>姓名</th>
                  <th>電子信箱</th>
                  <th>電話</th>
                  <th>性別</th>
                  <th>班級代號</th>
                  <th>班級</th>
                  <th>學年度</th>
                  <th>老師</th>
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
