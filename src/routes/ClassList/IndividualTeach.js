import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import "./IndividualTeach.css";

// import Individual from '../components/Studenlist';

export default class IndividualTeach extends Component {
  state = {
    nane: "",
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
        account: "歐俞均",
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
    ],
  };
  render() {
    const { match } = this.props;
    const { params } = match;
    const { lab } = this.state;
    console.log(params.id, 35);
    const data = lab.filter((item, index, array) => {
      return item.aid === parseInt(params.id);
    });
    console.log(data, 55);
    const textcontent = data.map((item, index, array) => {
      return (
        <div className="tablecontent">
          <table>
            <tr>
              <td>紀錄編號</td>
              <td>
                <input text="type" placeholder={item.aid}  />
              </td>
              <td>學生姓名</td>
              <td>
                <input text="type" placeholder={item.account} />
              </td>
              <td>輔導時間</td>
              <td>
                <input text="type" placeholder={item.crenteTime} />
              </td>
              <td>填寫人</td>
              <td>{item.keyin}</td>
            </tr>
            <tr>
              <td colSpan="2">標題</td>
              <td colSpan="2">
                <input text="type" placeholder={item.crenteTime} />
              </td>
              <td colSpan="2">類別</td>
              <td colSpan="2">
                <input text="type" placeholder={item.categody} />
              </td>
            </tr>
            <tr>
              <th colSpan="8">晤談內容</th>
            </tr>
            <tr>
              <td colSpan="8">
              <textarea id="message" name="message" placeholder="Your Message to Us"></textarea>
              </td>
            </tr>
            <tr>
              <th colSpan="8">摘要內容</th>
            </tr>
            <tr>
              <td colSpan="8">
              <textarea id="message" name="message" placeholder="Your Message to Us"></textarea>
              </td>
            </tr>
          </table>
        </div>
      );
    });
    console.log(textcontent, 85);
    
    return (
      <Layout>
        <div className="IndividualTeach">
          <div className="body">
          <div className="title">
            <span className="titlename">學生列表</span>
            </div>
            <div className="con">{textcontent}</div>
          </div>
        </div>
      </Layout>
    );
  }
}
//    <div className="btnsend">
//                     <button className="button button5">儲存變更</button>
//                     </div>
