import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Individual.css';
import user from '../Assets/user.png';

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
        abstract: "目前心理狀態並不佳，有待觀察。"
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
        abstract: "目前心理狀態並不佳，有待觀察。"
      }
    ]
  }
  render() {
    const { match } = this.props;
    const { params } = match;
    const { lab } = this.state;
    console.log(params.id,35);
    const data = lab.filter((item, index, array) => {
      return item.aid === parseInt(params.id);
    })
    console.log(data,55);
    const textcontent = data.map((item, index, array) => {
      return (
        <div className="tablecontent">
          <table >
            <tr>
              <td>紀錄編號</td><td><input text="type" value={item.aid}/></td>
              <td>學生姓名</td><td><input text="type" value={item.account}/></td>
              <td>輔導時間</td><td><input text="type" value={item.crenteTime}/></td>
              <td>填寫人</td><td>{item.keyin}</td>
            </tr>
            <tr>
              <td colSpan="2">標題</td><td colSpan="2"><input text="type" value={item.crenteTime}/></td>
              <td colSpan="2">類別</td><td colSpan="2"><input text="type" value={item.categody}/></td>
            </tr>
            <tr>
              <th colSpan="8">晤談內容</th>
            </tr>
            <tr>
              <td colSpan="8"><input className="textbox" text="type" value={item.content}/></td>
            </tr>
            <tr>
              <th colSpan="8">摘要內容</th>
            </tr>
            <tr>
              <td colSpan="8"><input text="type" value={item.abstract}/></td>
            </tr>

          </table>
          </div>

      );
    })
    console.log(textcontent,85);
    const textlab = data.map((item, index, array) => {
      return (
        <div className="main" >
          <div className="user">
            <img src={user} className="userimg" />
          </div>
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
        </div>






      );
    })
    return (
      <Layout>
        <div className="Individual">
          <div className="body">
            <span>個人輔導紀錄</span>
            <div className="per">{textlab}</div>
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