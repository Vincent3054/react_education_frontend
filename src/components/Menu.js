import React, { Component } from 'react';
import '../mixin/main.css';
import './Menu.css';
import {user} from '../Assets/user (1).png';
import home from '../Assets/home.png';
import edit from '../Assets/edit.png';
import set from '../Assets/settings.png';
import menu from '../Assets/open-menu (1).png';


export default class Menu extends Component {

  state = {
    ac: false
  }
  handelActive = () => {
    const { ac } = this.state;
    if (ac == false) {
      this.setState({ ac: true });
    } else {
      this.setState({ ac: false });
    }
  }
  render() {
    const { ac } = this.state;
    return (
      <div className="Menu">

        <button onClick={this.handelActive} className="buger" ><img src={menu} width="20px" className="buger-img" /></button>

        <div className={ac ? `Sidebar active` : `Sidebar`}>

          <ul className="ul">
            <li className="list"><img src={home} className="img" />首頁</li>
            <li className="list"><img src={user} className="img" />基本資料</li>
            <li className="list"><img src={edit} className="img" />編輯資料</li>
            <li className="list"><img src={set} className="img" />設定</li>
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