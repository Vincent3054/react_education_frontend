import React, { Component } from "react";
import "../mixin/main.css";
import "./Menu.css";
import user from "../Assets/users.png";
import person from "../Assets/user (1).png";
import home from "../Assets/home.png";
import edit from "../Assets/edit.png";
import set from "../Assets/settings.png";
import menu from "../Assets/open-menu (1).png";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  state = {
    ac: false,
  };
  handelActive = () => {
    const { ac } = this.state;
    if (ac == false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
  };
  render() {
    const { ac } = this.state;
    return (
      <div className="Menu">
        <button onClick={this.handelActive} className="buger">
          <img src={menu} width="20px" className="buger-img" />
        </button>

        <div className={ac ? `Sidebar active` : `Sidebar`}>
          <span>管理者</span>
          <ul className="ul">
            <Link to="/AdminReservation1/1" className="linkstyle">
              <li className="list">
                <img src={home} className="img" />
                首頁-預約(管理者)
              </li>
            </Link>
            <Link to="/AdminClassList" className="linkstyle">
              <li className="list">
                <img src={user} className="img" />
                班級列表(管理者)
              </li>
            </Link>
            <Link to="/TeacherManagement/1" className="linkstyle">
            <li className="list">
              <img src={set} className="img" />
              管理老師(管理者)
            </li>
            </Link>
            <Link to="/StudentManagement/1" className="linkstyle">
            <li className="list">
              <img src={set} className="img" />
              管理學生(管理者)
            </li>
            </Link>
          </ul>

          <hr />
          <span>輔導老師</span>
          <ul className="ul">
          <Link to="/CounselorTeacherReservation2/1" className="linkstyle">
            <li className="list">
              <img src={home} className="img" />
              首頁-預約(輔導老師)
            </li>
          </Link>
          <Link to="/CounselorTeacherClassList" className="linkstyle">
            <li className="list">
              <img src={user} className="img" />
              班級列表(輔導老師)
            </li>
          </Link>
            <li className="list">
              <img src={edit} className="img" />
              輔導紀錄(輔導老師)
            </li>
          <Link to="/Personal" className="linkstyle">
            <li className="list">
              <img src={person} className="img" />
              個人資料(輔導老師)
            </li>
          </Link>
          </ul>

          <hr />
          <span>導師</span>
          <ul className="ul">
          <Link to="/AdminCoachingrecord/C101" className="linkstyle">
            <li className="list">
              <img src={user} className="img" />
              首頁-學生列表(導師)
            </li>
          </Link>
          <Link to="/ClassTeacherReservation1/1" className="linkstyle">
            <li className="list">
              <img src={home} className="img" />
              預約狀態(導師)
            </li>
          </Link>
          <Link to="/Personal" className="linkstyle">
            <li className="list">
              <img src={person} className="img" />
              個人資料(導師)
            </li>
          </Link>
          </ul>

          <hr />
          <span>學生</span>
          <ul className="ul">
          <Link to="/StudentReservationStatus/1" className="linkstyle">
            <li className="list">
              <img src={home} className="img" />
              首頁-預約-申請(學生)
            </li>
          </Link>
          <Link to="/CoachingStudent/1" className="linkstyle">
            <li className="list">
              <img src={edit} className="img" />
              輔導紀錄(學生)
            </li>
          </Link>
          <Link to="/Personal" className="linkstyle">
            <li className="list">
              <img src={person} className="img" />
              個人資料(學生)
            </li>
          </Link>
          </ul>
        </div>
      </div>
    );
  }
}
/*
          <div className='footer'>

            <hr />
            <ul>
              <li className='footer-list'><a href="https://www.instagram.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_ig.png" className="footer-img" width="10px" /></a>instagram</li>
              <li className='footer-list'><a href="https://line.me/R/ti/p/M0NmOIYJLP" target="_blank"><img src="https://img.walei.tw/images/index/icon_line.png" className="footer-img" width="10" /></a>line</li>
              <li className='footer-list'><a href="https://www.youtube.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_youtube.png" className="footer-img" width="10" /></a>youtube</li>
              <li className='footer-list'><a href="https://www.facebook.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_fb.png" className="footer-img" width="10" /></a>facebook</li>
              <li className='footer-font'>關於新聞中心版權</li>
              <li className='footer-font'>與我們聯絡創作者廣告</li>
              <li className='footer-font'>開發人員</li>
              <li className='footer-font'>條款隱私權政策與安全性</li>
              <li className='footer-font'>測試新功能</li>
            </ul>
          </div>
           */
