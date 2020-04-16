import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/ClassList.css';
export default class ClassList extends Component {
  render() {
    return (
      <Layout>
        <div classNameName="className>">
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="card-body">
                  <h3>Card 1</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
                <ul className="card-actions">
                  <li style={{width:"50%"}}>
                    <span><a>操作一</a></span>
                  </li>
                  <li style={{width:"50%"}}>
                    <span><a>操作二</a></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Card 2</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Card 3</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Card 4</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>


            <div className="column">
              <div className="card">
                <h3>Card 5</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Card 5</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Card 6</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h3>Card 7</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

          </div>
        </div>
      </Layout>
    );
  }
}
