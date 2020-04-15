import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
      <div>
      <ul>
      <li><a href="https://www.instagram.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_ig.png" width="20px"/></a>instagram</li>
      <li><a href="https://line.me/R/ti/p/M0NmOIYJLP" target="_blank"><img src="https://img.walei.tw/images/index/icon_line.png" width="20"/></a>line</li>
      <li><a href="https://www.youtube.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_youtube.png" width="20"/></a>youtube</li>
      <li><a href="https://www.facebook.com" target="_blank"><img src="https://img.walei.tw/images/index/icon_fb.png" width="20"/></a>facebook</li>
      </ul>
      版權所有 (C) 2000 - 2019 www.walei.tw All Rights Reserved.
      </div>
      </div>
    );
  }
}
