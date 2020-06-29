import React, { Component } from "react";
import axios from "axios";
import Layout from "../../layouts/Layout";
import "../../mixin/main.css";
import "../../components/Card.css";
import"../Reservation/StudentReservation.css";
import Card from "../../components/Card";
import Correctfrom from "../../Assets/EmailValidate_check.png";
export default class AdminClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ac: false,
      comp: false,
      Class_Id:"",
      Grade:"",
      ClassName:"",
      Teacher:"",
      classlist: [],
      ClassTeacher:[],
    };
  }
  componentDidMount() {
    this.gitclass();
    this.gitClassTeacher();
  }
  gitClassTeacher(){
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminTeacher?Role_Id=R002`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        // console.log(res.data.Data.DataList);
        const datalist = res.data.Data.DataList;
        this.setState({
          ClassTeacher: datalist
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })
  }

 gitclass=()=>{
  axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/ClassStudent`, {
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
  handleSubmit = (e) => {
    const {
      Class_Id,
      Grade,
      ClassName,
      Teacher,
    } = this.state;
    const payload = {
      Class_Id,
      Grade,
      ClassName,
      Teacher,
    };
    if (
      Class_Id=== "" || Grade=== "" ||ClassName=== "" ||Teacher===""
    ) 
    {
      alert("欄位不可空白");
    }
    else {
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Class `, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res.data);
          // alert(res.data.Message);
          this.comp();
          this.gitclass();
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
    const{Class_Id,Grade,ClassName,Teacher}=this.state;
    const { ac, comp } = this.state;
    const { classlist ,ClassTeacher} = this.state;
    const Cardlist = classlist.map((item, index) => {
        console.log(item,index );
        return (
          <div key={index}>
            <Card data={item}  role="AdminCoachingrecord" git={this.gitclass} />
          </div>
        );
      }
    );
    const ClassTeacherList = ClassTeacher.map((item, index, array) => {
      return (
          <option key={index} value={item.Name}>{item.Name}</option>
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
                    <span className="title">新增班級</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
                    <div className="list">
                      <span className="list-text">班級編號：</span>
                      <input className="input" type="text"  onChange={(e) => {
                        this.setState({ Class_Id: e.target.value });
                      }}
                      value={Class_Id}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">年度：</span>
                      <input className="input" type="text"  onChange={(e) => {
                        this.setState({ Grade: e.target.value });
                      }}
                      value={Grade}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">班級名稱：</span>
                      <input className="input" type="text" onChange={(e) => {
                        this.setState({ ClassName: e.target.value });
                      }}
                      value={ClassName}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">班級老師：</span>
                      <select className="input" onChange={(e) => {
                        this.setState({ Teacher: e.target.value });
                      }}
                      value={Teacher}>
                        <option ></option>
                        {ClassTeacherList}
                      </select>
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
          </div>
        </div>
      <div className="Card">
        <div className="row">
          <div className="column">
            <div className="cards">
              <div className="card card--big">
                <div className="addClass">
                  <div  onClick={this.alterData}>
                    <span>+ &nbsp;</span>
                    <span>新增班級</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AdminClassList">{Cardlist}</div>
      </Layout>
    );
  }
}
