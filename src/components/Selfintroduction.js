import React, { Component } from "react";
import "../mixin/main.css";
import "../components/Selfintroduction.css";
import { Link } from "react-router-dom";
export default class Selfintroduction extends Component {
  render() {
    const { data, role } = this.props;
    return (
      <div className="Selfintroduction">
        <div className="row">
          <div className="column">
            <div className="cards">
              <div className="card card--big">
                <div className="card__image">
                </div>
                <h2 className="card__title">{data.ClassName}</h2>
                <div className="content">
                <div className="boxone">
                  <span className="font">姓名</span>
                  <span className="font">：</span>
                  <span className="font">{item.account}</span>
                </div>
                <div className="boxtwo">
                  <span className="font">聯絡電話</span>
                  <span className="font">：</span>
                  <span className="font">{item.phone}</span>
                </div>
                <div className="boxthree">
                  <span className="font">電子郵件</span>
                  <span className="font">：</span>
                  <span className="font">{item.email}</span>
                </div>
                <div className="boxfour">
                  <span className="font">班級</span>
                  <span className="font">：</span>
                  <span className="font">{item.classtype}</span>
                </div>
                <div className="boxfive">
                  <span className="font">班級代號</span>
                  <span className="font">：</span>
                  <span className="font">{item.class}</span>
                </div>
                <div className="boxsix">
                  <span className="font">性別</span>
                  <span className="font">：</span>
                  <span className="font">{item.gender}</span>
                </div>
                <div className="card__action-bar">
                  <Link to={`./${role}/${data.Class_Id}`}>
                    <a href="#" className="ph-button ph-btn-green">
                      進入
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
