import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../mixin/main.css";
import "../components/Card.css";
import ClassCard from "../Assets/1694.jpg";
import Correctfrom from "../Assets/EmailValidate_check.png";
export default class Card extends Component {
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
    this.gitClassTeacher();
  }
  gitClassTeacher(){
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/AdminTeacher?Role_Id=R002`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Token")),
      }
      })
      .then((res) => {
        const datalist = res.data.Data.DataList;
        this.setState({
          ClassTeacher: datalist
        })
      }).catch((err) => {
        console.error({ err }, 90);
      })
  }
  handleSubmit = (e) => {
    const { data} = this.props;
      e.preventDefault();
      axios
        .delete(`http://studytutor_backend.hsc.nutc.edu.tw/api/Class?Class_Id=${data.Class_Id}`,{
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res.data);
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
  handleSubmit2 = (e) => {
    const { data} = this.props;
    const {
      Class_Id,
      Grade,
      ClassName,
      Teacher,
    } = this.state;
    const payload = {
      Class_Id:data.Class_Id,
      Grade,
      ClassName,
      Teacher,
    };
      e.preventDefault();
      axios
        .put(`http://studytutor_backend.hsc.nutc.edu.tw/api/Class`, payload, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          console.log(res.data);
          // alert(res.data.Message);
          this.comp();
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
  alterData = () => {
    const { ac } = this.state;
    // console.log(this.props.data,82)
    this.setState({
      Grade:this.props.data.Grade,
      ClassName:this.props.data.ClassName,
      Teacher:this.props.data.Teacher,
    })
    //setstate
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
  render() {
    const{Grade,ClassName,Teacher,ClassTeacher}=this.state;
    const { ac, comp } = this.state;
    const { data, role } = this.props;
    const ClassTeacherList = ClassTeacher.map((item, index, array) => {
      return (
          <option key={index} value={item.Name}>{item.Name}</option>
      );
    });
    return (
      <div>
      <div className="StudentReservation">
          <div className={comp ? `limiter` : `limiter-mone`}>
            <div className="background">
              <div className="container">
                <div className="wrap-comp">
                  <form className="form">
                    <span className="title">修改成功</span>
                    <div style={{ textAlign: "center", display: "block" }}>
                      <img
                        src={Correctfrom}
                        alt="成功"
                        title="ocmp"
                        style={{ width: "140px" }}
                      />
                    </div>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <span>恭喜您修改成功!</span>
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
                  <form className="form" onSubmit={this.handleSubmit2}>
                    <span className="title">修改班級</span>
                    <div class="close"  type="button" onClick={this.alterData}></div>
                    <div className="list">
                      <span className="list-text">班級編號：{data.Class_Id}</span>
                    </div>
                    <div className="list">
                      <span className="list-text">班級名稱：</span>
                      <input className="input" type="text" onChange={(e) => {
                        this.setState({ ClassName: e.target.value });
                      }}
                      value={ClassName}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">年度：</span>
                      <input className="input" type="text"  onChange={(e) => {
                        this.setState({ Grade: e.target.value });
                      }}
                      value={Grade}></input>
                    </div>
                    <div className="list">
                      <span className="list-text">班級老師：</span>
                      <select className="input" onChange={(e) => {
                        this.setState({ Teacher: e.target.value });
                      }}
                      value={Teacher}>
                        <option></option>
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
              <div className="cards" >
                <div className="card card--big">
                  <div className="card__image">
                    <img
                      src={ClassCard}
                      alt="班級照片"
                      title="ClassCard"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <h2 className="card__title">{data.ClassName}</h2>
                  <p className="card__text">
                    班級編號：{data.Class_Id}
                    <br/>
                    入學年度：{data.Grade}
                    <br/>
                    班級老師：{data.Teacher}
                  </p>
                  <div class="close" onClick={this.handleSubmit}></div>
                  <div className="card__action-bar" style={{paddingRight:"90px"}} onClick={this.alterData}>
                    <a className="ph-button ph-btn-green" >
                      編輯
                    </a>
                  </div>
                  <div className="card__action-bar">
                    <Link to={`./${role}/${data.Class_Id}`}>
                      <a className="ph-button ph-btn-green">
                        進入
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
