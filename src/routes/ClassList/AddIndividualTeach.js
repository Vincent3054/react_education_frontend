import React, { Component } from "react";
import Layout from "../../layouts/Layout";
import "./AddIndividualTeach.css";


export default class AddIndividualTeach extends Component {
  state = {
  }
  render() {


    return (
      <Layout>
        <div className="AddIndividualTeach">
          <span><div className="titlename">個人輔導紀錄</div></span>
          <div className="body">
          <form action="get.php" method="get">
          姓名：<input type='text'/><br/>
          電話：<input type='text'/><br/>
          <p><input type='submit' vÎalue='送出表單'/></p>
          </form>
            <div className="con"></div>
          </div>
        </div>
      </Layout>
    );
  }
}
//    <div className="btnsend">
//                     <button className="button button5">儲存變更</button>
//                     </div>
