import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import "./CoachingStudent.css";

export default class CoachingStudent extends Component {
  state = {
    lab: [
      {
        account: "歐俞均",
        gender: "女",
        phone: "0988295638",
        email: "ouyujyun@gmail.com",
        classtype: "資管三Ａ",
        class: 101,
        remarks: "高關懷",
        aid: 1,
        crenteTime: "2020/04/24",
        keyin: "姜琇森",
        categody: "心理衛生",
        title: "第一次輔導 歐俞均",
        content: "歐俞均學生家庭狀況，輔導了解狀況後xxxxxxxxxxxxxxxx。",
        abstract: "目前心理狀態並不佳，有待觀察。",

      },
      {
        account: "李四",
        gender: "女",
        phone: "0988295638",
        email: "ouyujyun@gmail.com",
        classtype: "資管三Ａ",
        class: 101,
        remarks: "高關懷",
        aid: 2,
        crenteTime: "2020/04/24",
        keyin: "姜琇森",
        categody: "心理衛生",
        title: "第一次輔導 歐俞均",
        content: "歐俞均學生家庭狀況，輔導了解狀況後xxxxxxxxxxxxxxxx。",
        abstract: "目前心理狀態並不佳，有待觀察。",
      },
      {
        account: "李四",
        gender: "女",
        phone: "0988295638",
        email: "ouyujyun@gmail.com",
        classtype: "資管三Ａ",
        class: 101,
        remarks: "高關懷",
        aid: 3,
        crenteTime: "2020/04/24",
        keyin: "姜琇森",
        categody: "心理衛生",
        title: "第一次輔導 歐俞均",
        content: "歐俞均學生家庭狀況，輔導了解狀況後xxxxxxxxxxxxxxxx。",
        abstract: "目前心理狀態並不佳，有待觀察。",
      },
      {
        account: "歐於均",
        gender: "女",
        phone: "0988295638",
        email: "ouyujyun@gmail.com",
        classtype: "資管三Ａ",
        class: 101,
        remarks: "高關懷",
        aid: 1,
        crenteTime: "2020/04/24",
        keyin: "姜琇森",
        categody: "心理衛生",
        title: "第二次輔導 歐俞均",
        content: "歐俞均學生家庭狀況，輔導了解狀況後xxxxxxxxxxxxxxxx。",
        abstract: "目前心理狀態並不佳，有待觀察。",
      },
      {
        account: "歐俞均",
        gender: "女",
        phone: "0988295638",
        email: "ouyujyun@gmail.com",
        classtype: "資管三Ａ",
        class: 101,
        remarks: "高關懷",
        aid: 1,
        crenteTime: "2020/04/24",
        keyin: "姜琇森",
        categody: "心理衛生",
        title: "第三次輔導 歐俞均",
        content: "歐俞均學生家庭狀況，輔導了解狀況後xxxxxxxxxxxxxxxx。",
        abstract: "目前心理狀態並不佳，有待觀察。",
      },
    ],
  };
  render() {
    const { match } = this.props;
    const { params } = match;
    const { lab } = this.state;
    const data = lab.filter((item, index, array) => {
      return item.aid === parseInt(params.id);
    });
    const person = lab.filter((item, index, array) => {
      return index === 0;
    });

    const textlab = data.map((item, index, array) => {
      return (
        <tr className="list-body" key={index}>
          <td> {index} </td>
          <td> {item.class} </td>
          <td> {item.account}</td>
          <td> {item.gender}</td>
          <td> {item.remarks}</td>
          <td> {item.remarks}</td>
          <td>
            {" "}
            <Link to="/Individual/1">查看</Link>｜
            <Link to="/IndividualTeach/1">編輯</Link>
          </td>
        </tr>
      );
    });
    const textperson = person.map((item, index, array) => {
      return (
        <div className="content">
          <div className="boxone">
            <span className="font">姓名</span>
            <span className="font">：</span>
            <span className="font">{item.account}</span>
          </div>
          <div className="boxtwo">
            <span className="font">聯絡電話</span>
            <span className="font">：</span>
            <span className="font">{item.phone}</span>
          </div>
          <div className="boxthree">
            <span className="font">電子郵件</span>
            <span className="font">：</span>
            <span className="font">{item.email}</span>
          </div>
          <div className="boxfour">
            <span className="font">班級</span>
            <span className="font">：</span>
            <span className="font">{item.classtype}</span>
          </div>
          <div className="boxfive">
            <span className="font">班級代號</span>
            <span className="font">：</span>
            <span className="font">{item.class}</span>
          </div>
          <div className="boxsix">
            <span className="font">性別</span>
            <span className="font">：</span>
            <span className="font">{item.gender}</span>
          </div>
        </div>
      );
    });
    return (
      <Layout>

        <div className="CoachingStudent">
          <span className="titlename">學生列表</span>
          <div className="main">
         
            {textperson}
          </div>
            <table className="table">
              <thead>
                <tr>
                  <td colSpan="8" className="theadstart">
                    <label>search：</label>
                    <input type="text" />
                  </td>
                </tr>
                <tr className="list">
                  <th>編號</th>
                  <th>學生姓名</th>
                  <th>輔導時間</th>
                  <th>填寫人</th>
                  <th>類別</th>
                  <th>標題</th>
                  <th>摘要</th>
                </tr>
              </thead>
              <tbody>{textlab}</tbody>
              <tfoot>
                <tr>
                  <td colspan="8" className="foot">
                    <span className="footmain">上一頁</span>
                    <button type="button" className="btn footmain">
                      1
                </button>
                    <button type="button" className="btn footmain">
                      2
                </button>
                    <button type="button" className="btn footmain">
                      3
                </button>
                    <span className="footmain">下一頁</span>
                  </td>
                </tr>
              </tfoot>
            </table>
            </div>
            </Layout>
      
    );
  }
}
