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
    classId:[],
  };
  componentDidMount() {
    this.get();
    this.getclassid();
  }
  getclassid(){
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/ClassStudent`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        console.log(res,12);
        const datalist = res.data.Data.DataList;
        this.setState({
          classId: datalist
        })
      }).catch((err) => {
        console.error({ err }, 91);
      })
    }
  get(){
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
    const { Account} = this.state;
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
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Student?Account=${Account}`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res);
          this.get();
        })
        .catch((error) => {
          const status = error.response.status;
          //???????????????
          console.log(status);
          const err = JSON.parse(error.request.response);
          //????????????
          alert(err.Message);
        });
  };
  handleDelete = (Account) => {
      axios
        .delete(`http://studytutor_backend.hsc.nutc.edu.tw/api/Student?Account=${Account}`,  {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res);
          this.get();
          alert("????????????");
        })
        .catch((error) => {
          const status = error.response.status;
          //???????????????
          console.log(status);
          const err = JSON.parse(error.request.response);
          //????????????
          alert(err.Message);
        });
  };
  alterData = (number) => {
    const { ac ,studentAll} = this.state;
    const  studentdata = studentAll.filter(function(item, index, array){
      return index  === number;    
    });
    studentdata.map((item, index, array) => {
      return (
        this.setState({
          Account:item.Account,
          Name:item.Name,
          Email:item.Email,
          Phone:item.Phone,
          Sex:item.Sex,
          Class_Id:item.Class_Id,
        })
      );
    })
    if (ac === false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
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
    const {Name,Email,Phone,Class_Id}=this.state;
    const { ac, comp, studentAll,classId } = this.state;
    const classIdList = classId.map((item, index, array) => {
      return (
          <option key={index} value={item.Class_Id}>{item.Class_Id}</option>
      );
    });
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
              onClick={e=>{this.alterData(index)}}
              style={{ width: "100px" }}
            >
              ??????
            </button>
            <button 
              type="button" 
              className="btn" 
              onClick={e=>{this.handleDelete(item.Account)}}
              style={{ width: "100px" }}>
              ??????
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
                    <span className="title">????????????</span>
                    <div style={{ textAlign: "center", display: "block" }}>
                      <img
                        src={Correctfrom}
                        alt="??????"
                        title="Error"
                        style={{ width: "140px" }}
                      />
                    </div>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <span>?????????????????????!</span>
                    </div>
                    <div className="list">
                      <button className="login-btn" onClick={this.comp}>
                        ????????????
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
                    <span className="title">??????</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
                    <div className="list">
                    <span className="list-text">??????</span>
                    <input
                      type="radio"
                      name="gender"
                      value="???"
                      id="male"
                      onChange={(e) => {
                        this.setState({ Sex: e.target.value });
                      }}
                    />
                    <label for="male">???</label>
                    <input
                      type="radio"
                      name="gender"
                      value="???"
                      id="female"
                      onChange={(e) => {
                        this.setState({ Sex: e.target.value });
                      }}
                    />
                    <label for="female">???</label>
                  </div>
                    <div className="list">
                      <span className="list-text">?????????</span>
                      <input className="input" type="text"  onChange={(e) => {
                        this.setState({ Name: e.target.value });
                      }}
                      value={Name}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">???????????????</span>
                      <input className="input" type="email"  onChange={(e) => {
                        this.setState({ Email: e.target.value });
                      }}
                      value={Email}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">?????????</span>
                      <input className="input" type="tel"  onChange={(e) => {
                        this.setState({ Phone: e.target.value });
                      }}
                      value={Phone}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">???????????????</span>
                      <select className="input" onChange={(e) => {
                        this.setState({ Class_Id: e.target.value });
                      }}
                      value={Class_Id}>
                        <option ></option>
                        {classIdList}
                      </select>
                    </div>
                    <div className="list">
                      <button className="login-btn" onClick={this.comp}>
                        ??????
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
                  <h2>??????????????????</h2>
                </th>
                <th className="tablecursor" colspan="4">
                  <div class="demo">
                    <span>?????????</span>
                    <input
                      className="text"
                      type="text"
                      placeholder="????????????"
                    />
                  </div>
                </th>
                <tr className="list">
                  <th>??????</th>
                  <th>??????</th>
                  <th>????????????</th>
                  <th>??????</th>
                  <th>??????</th>
                  <th>????????????</th>
                  <th>??????</th>
                  <th>?????????</th>
                  <th>??????</th>
                  <th>??????</th>
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
