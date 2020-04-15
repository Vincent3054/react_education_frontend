import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
      <div>
      <hr />
      <ul>
      <li className='footer-list'><a href="https://www.instagram.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_ig.png" width="10px"/></a>instagram</li>
      <li className='footer-list'><a href="https://line.me/R/ti/p/M0NmOIYJLP" target="_blank"><img src="https://img.walei.tw/images/index/icon_line.png" width="10"/></a>line</li>
      <li className='footer-list'><a href="https://www.youtube.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_youtube.png" width="10"/></a>youtube</li>
      <li className='footer-list'><a href="https://www.facebook.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_fb.png" width="10"/></a>facebook</li>
      <li className='footer-font'>關於新聞中心版權</li>
      <li className='footer-font'>與我們聯絡創作者廣告</li>
      <li className='footer-font'>開發人員</li>
      <li className='footer-font'>條款隱私權政策與安全性</li>
      <li className='footer-font'>測試新功能</li>
      
      </ul>
      

      </div>
      </div>
    );
  }
}
