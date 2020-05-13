import React, { Component } from "react";
import Layout from "../layouts/Layout";
import "../mixin/main.css";
import "../routes/ClassList.css";
import Card from "../components/Card";
export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "101",
        "202",
        "101",
        "202",
        "101",
        "202",
        "101",
        "202",
        "101",
        "202",
      ],
    };
  }
  render() {
    const { data } = this.state;
    const Cardlist = data.map(
      (item, index) => (
        console.log(item, index),
        (
          <div key={index}>
            <Card data={item} />
          </div>
        )
      )
    );
    return (
      <Layout>
        <div className="ClassList">{Cardlist}</div>
      </Layout>
    );
  }
}
