import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/ClassList.css';
import Card from '../components/Card';
export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [1,2,3,4,5,6,7,8,9,10],
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
        <div className="ClassList>">
          <div className="row">
            {Cardlist}
            <Card/>
          </div>
        </div>
      </Layout>
    );
  }
}


     