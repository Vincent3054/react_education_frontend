import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Studentdata.css';
import indeximg from '../Assets/1926.jpg';

export default class Studentdata extends Component {
    state = {
        lab: [
          {
            name: "AAA",
            gender: "男",
            phone: "0988295638",
            class:101
          },
          {
            name: "AAA",
            gender: "女",
            phone: "0988295638",
            class:102
          },
          {
            name: "ADA",
            gender: "女",
            phone: "0988295638",
            class:103
          },
          {
            name: "EAA",
            gender: "男",
            phone: "0988295638",
            class:201
          },
          {
            name: "AMA",
            gender: "男",
            phone: "0988295638",
            class:202
          },
          {
            name: "AWA",
            gender: "女",
            phone: "0988295638",
            class:203
          },
          {
            name: "BBA",
            gender: "女",
            phone: "0988295638",
            class:204
          },
          {
            name: "CA",
            gender: "男",
            phone: "0988295638",
            class:205
          },
    
        ]
      }
      render() {
        
        const{ match }=this.props;
        const{params}=match;
        const{lab}=this.state;
        const data=lab.filter((item,index,array)=>{
            console.log(typeof(params.id),67);
            console.log((params.id),67);
            return item.class === parseInt(params.id); 
        })
        
        const textlab=data.map((item,index,array)=>{
          return <tr className="studen-list" key={index}>
            <td> {item.name}</td>
            <td> {item.gender}</td>
            <td> {item.phone}</td>
            <td className="studen-td-btn">
              <button type="button" className="studen-btn">編輯</button>
              <button type="button" className="studen-btn">刪除</button>
            </td></tr>
    
        })
        console.log(textlab,82);

        return (
            <Layout>
                <div className="Studentdata-body">
                    
                <div className="studen-title">
                <table className="studen-table">
                  <thead>
                    <tr><td colSpan="4"><img src={indeximg} className='index-img' /></td></tr>
                    <tr className="studen-list">
                      <th>姓名</th>
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
                </div>
            </Layout>
        );
    }
}