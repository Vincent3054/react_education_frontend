import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../mixin/main.css";
import "../components/Card.css";
import ClassCard from "../Assets/1694.jpg";
export default class  CounselorTeacherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classlist: [],
    };
  }
  render() {
    const { data, role } = this.props;
    return (
      <div>
        <div className="Card">
          <div className="row">
            <div className="column">
              <div className="cards" >
                <div className="card card--big">
                  <div className="card__image">
                    <img
                      src={ClassCard}
                      alt="班級照片"
                      title="ClassCard"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <h2 className="card__title">{data.ClassName}</h2>
                  <p className="card__text">
                    班級編號：{data.Class_Id}
                    <br/>
                    入學年度：{data.Grade}
                  </p>
                  <div className="card__action-bar">
                    <Link to={`./${role}/${data.Class_Id}`}>
                      <a className="ph-button ph-btn-green">
                        進入
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
