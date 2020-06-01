import React, { Component } from "react";
import axios from "axios";
import Layout from "../../layouts/Layout";
import "../../mixin/main.css";
import "../../components/Card.css";
import"../Reservation/StudentReservation.css";
import Card from "../../components/Card";
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
      classlist: [
      ],
    };
  }
  componentDidMount() {
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
          // console.log(this.state.classlist)
        })
      }).catch((err) => {
        // console.error({ err }, 90);
      })
  }
  alterData = () => {
    const { ac } = this.state;
    if (ac == false) {
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
          alert(res.data.Message);
          //呼叫Comp
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
    const {classlist } = this.state;
    // console.log(classlist);
    const Cardlist = classlist.map(
      (item, index) => {
        console.log(item,index );
        return (
          <div key={index}>
            <Card data={item} role="AdminCoachingrecord" />
          </div>
        );
      }
    );
    // console.log(Cardlist);
    return (
      <Layout>
      <div className="StudentReservation">
          <div className={ac ? `limiter` : `limiter-mone`}>
            <div className="background">
              <div className="container">
                <div className="wrap">
                  <form className="form" onSubmit={this.handleSubmit}>
                    <span className="title">新增班級</span>
                    <div className="cancel">
                      <button className="g-right" onClick={this.alterData}>
                      </button>
                    </div>
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
                      <input className="input" type="text" onChange={(e) => {
                        this.setState({ Teacher: e.target.value });
                      }}
                      value={Teacher}></input>
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
