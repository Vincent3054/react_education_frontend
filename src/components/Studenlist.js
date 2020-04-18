import React, { Component } from 'react';
import './Studenlist.css';

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
      return <tr className="studen-list" key={index}>{`<td> ${item.name}</td><td> ${item.gender}</td><td> ${item.phone}</td>`}</tr>

    })
    console.log(lab);
    return (

      <div className="studen-title">
        <table style="width:100%">
          <thead>
            <tr className="studen-list">
              <th>姓名</th>
              <th>性別</th>
              <th>電話</th>
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