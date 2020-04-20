import React, { Component } from 'react';
import './Studenlist.css';
import indeximg from '../Assets/1926.jpg';

export default class Studenlist extends Component {
  state = {
    lab: [
      {
        name: "AAA",
        gender: "男",
        phone: "0988295638"
      },
      {
        name: "AAA",
        gender: "女",
        phone: "0988295638"
      },
      {
        name: "ADA",
        gender: "女",
        phone: "0988295638"
      },
      {
        name: "EAA",
        gender: "男",
        phone: "0988295638"
      },
      {
        name: "AMA",
        gender: "男",
        phone: "0988295638"
      },
      {
        name: "AWA",
        gender: "女",
        phone: "0988295638"
      },
      {
        name: "BBA",
        gender: "女",
        phone: "0988295638"
      },
      {
        name: "CA",
        gender: "男",
        phone: "0988295638"
      },

    ]
  }
  render() {


    const { lab } = this.state;

    const textlab = lab.map((item, index, array) => {
      return <tr className="studen-list" key={index}>
        <td> {item.name}</td>
        <td> {item.gender}</td>
        <td> {item.phone}</td>
        <td className="studen-td-btn">
          <button type="button" className="studen-btn">編輯</button>
          <button type="button" className="studen-btn">刪除</button>
        </td></tr>

    })
    console.log(lab);
    return (

      <div className="studen-title">
        <table className="studen-table">
          <thead>
            <tr><td colspan="4"><img src={indeximg} className='index-img' /></td></tr>
            <tr className="studen-list">
              <th >姓名</th>
              <th>性別</th>
              <th>電話</th>
              <th className="studen-td-btn">管理</th>
            </tr>
          </thead>
          <tbody>
            {textlab}
          </tbody>
        </table>

      </div>
    );

  }
};