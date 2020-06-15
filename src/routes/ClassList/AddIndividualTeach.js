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
        <div className="titlename"><span>個人輔導紀錄</span></div>
          <div className="body">
            <form action="get.php" method="get">
              <div className="level">
                <span>姓名</span><input type='text' /><br />
              </div>
              <div className="level">
              <span>電話</span><input type='text' /><br />
              </div>
              <div className="level">
              <span>填寫人</span><input type='text' /><br />
              </div>
              <div className="level">
              <span>標題</span><input type='text' /><br />
              </div>
              <div className="level">
              <span>類別</span>
              <select id="country" name="country">
                <option value="usa">Australia</option>
                <option value="usa">Canada</option>
                <option value="usa">USA</option>
              </select>
              <span>輔導日期</span>
              <input type="date" id="birthday" name="birthday" /><br />
              </div>
             
              <span className="titname">晤談內容</span>
              <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea><br />
              <span>摘要內容</span>
              <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea><br />
              <p><input type='submit' vÎalue='送出表單' /></p>
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
