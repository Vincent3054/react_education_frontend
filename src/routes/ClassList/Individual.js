import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import "./Individual.css";
import user from "../../Assets/user.png";

// import Individual from '../components/Studenlist';

export default class Individual extends Component {
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
        <div className="content">
          <div className="m">
            <div className="level">
              <div className="tit">
                姓名
            </div>
              <div className="mycontent">
                {item.account}
              </div>
              <div className="tit">
                電話
            </div>
              <div className="mycontent">
                {item.phone}
              </div>
            </div>


            <div className="level">
              <div className="tit">
                類別
              </div>
              <div className="mycontent">
                {item.categody}
              </div>

              <div className="tit">
                輔導日期
              </div>
              <div className="mycontent">
                {item.crenteTime}
              </div>
            </div>
          </div>


          <div className="n">
            <div className="level">
              <div className="titbig">
                標題
              </div>
              <div className="mycontentbig">
                {item.title}
              </div>
            </div>

            <div className="level">
              <div className="titbig">
                填寫人
              </div>
              <div className="mycontentbig">
                {item.keyin}
              </div>
            </div>

            <div className="level">
              <div className="titbig">
                晤談內容
              </div>
              <div className="mycontentbig">
                {item.content}
              </div>
            </div>

            <div className="level">
              <div className="titbig">
                摘要內容
              </div>
              <div className="mycontentbig">
                {item.abstract}
              </div>
            </div>
          </div>
        </div>
      );
    });
    console.log(textcontent, 85);

    return (
      <Layout>
        <div className="Individual">
          <div className="titlename"> <span>個人輔導紀錄</span></div>
          {textcontent}
        </div>
      </Layout>
    );
  }
}
