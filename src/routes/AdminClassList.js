import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "../mixin/main.css";
import "../routes/AdminClassList.css";
import Card from "../components/Card";
export default class AdminClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "C202",
        "C101",
        "C101",
        "C202",
        "C101",
        "C202",
        "C101",
        "C202",
        "C101",
        "C202",
      ],
    };
  }
  render() {
    const { data } = this.state;
    const Cardlist = data.map(
      // (item, index) => (
      //   console.log(item, index)
      //   (
      //     <div key={index}>
      //       <Card data={item} />
      //     </div>
      //   )
      // )
      (item, index) => {
        console.log(item, index);
        return (
          <div key={index}>
            <Card data={item} role="AdminCoachingrecord"/>
          </div>
        )
      }
    );
    console.log(Cardlist);
    return (
      <Layout>
        <div className="AdminClassList">{Cardlist}</div>
      </Layout>
    );
  }
}
