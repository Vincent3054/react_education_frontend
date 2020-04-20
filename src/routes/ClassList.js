import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/ClassList.css';
import Card from '../components/Card';
export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ["班級一", "班級二", "班級三", "班級四", "班級五", "班級六", "班級七", "班級八", "班級九", "班級十"],
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


