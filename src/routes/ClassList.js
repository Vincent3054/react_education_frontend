import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/ClassList.css';
import Card from '../components/Card';
export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ["資訊班1", "資訊班2", "資訊班3", "資訊班4", "資訊班5", "藝術班6", "藝術班7", "藝術班8", "藝術班9","藝術班10",],
    }
  }
  render() {
    const { data } = this.state;
    const Cardlist = data.map((item) => (
      console.log(item),
      <div>
        <Card data={item} />
      </div>
    ))
    return (
      <Layout>
        <div className="ClassList">
          {Cardlist}
        </div>
      </Layout>
    );
  }
}


