import React, { Component } from "react";
import axios from "axios";
import Layout from "../../layouts/Layout";
import "../../mixin/main.css";
import "../../components/Card.css";
import"../Reservation/StudentReservation.css";
import Card from "../../components/Card";
export default class CounselorTeacherClassList extends Component {
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
     // 获取localstorage
    // let userInfo = localStorage.getItem("userInfo");
    // // 判断用户是否登录/登录信息是否过期
    // if(userInfo && Date.now() - JSON.parse(userInfo).date < 2 * 60 * 60 * 1000) {
    //   this.setState({userInfo: JSON.parse(userInfo)});
    // }
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
 
  
  render() {
    
    const { classlist } = this.state;
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

      <div className="CounselorTeacherClassList">{Cardlist}</div>
      </Layout>
    );
  }
}
