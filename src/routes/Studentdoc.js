import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "./Studentdoc.css";
import indeximg from "../Assets/1926.jpg";

export default class Studentdoc extends Component {
  state = {
    lab: [
      {
        name: "AAA",
        gender: "男",
        phone: "0988295638",
        class: 101,
        remarks: "高關懷",
      },
      {
        name: "AAA",
        gender: "女",
        phone: "0988295638",
        class: 102,
        remarks: "弱勢",
      },
      {
        name: "ADA",
        gender: "女",
        phone: "0988295638",
        class: 103,
        remarks: "低收",
      },
      {
        name: "EAA",
        gender: "男",
        phone: "0988295638",
        class: 202,
        remarks: "單親",
      },
      {
        name: "AMA",
        gender: "男",
        phone: "0988295638",
        class: 202,
        remarks: "高關懷",
      },
      {
        name: "AWA",
        gender: "女",
        phone: "0988295638",
        class: 202,
        remarks: "低收",
      },
      {
        name: "BBA",
        gender: "女",
        phone: "0988295638",
        class: 202,
        remarks: "高關懷",
      },
      {
        name: "CA",
        gender: "男",
        phone: "0988295638",
        class: 202,
        remarks: "",
      },
    ],
  };
  render() {
    const { match } = this.props;
    const { params } = match;
    const { lab } = this.state;
    const data = lab.filter((item, index, array) => {
      return item.class === parseInt(params.id);
    });

    const textlab = data.map((item, index, array) => {
      return (
        <tr className="list" key={index}>
          <td> {index} </td>
          <td> {item.class} </td>
          <td> {item.name}</td>
          <td> {item.gender}</td>
          <td> {item.remarks}</td>
          <td className="td-btn">
            <button type="button" className="btn">
              編輯
            </button>
            <button type="button" className="btn">
              刪除
            </button>
          </td>
        </tr>
      );
    });

    return (
      <Layout>
        <div className="Studentdoc">
          <div className="title">
            <div className="index-img">
              <img src={indeximg} />
            </div>
            <table className="table">
              <thead>
                <tr className="list">
                  <th>序號</th>
                  <th>班級</th>
                  <th>姓名</th>
                  <th>性別</th>
                  <th>備註</th>
                  <th className="td-btn">管理</th>
                </tr>
              </thead>
              <tbody>{textlab}</tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}
