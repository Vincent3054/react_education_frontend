import React, { Component } from 'react';
import './Menu.css';
import user from './images/user.png';
import edit from './images/edit.png';
import home from './images/home.png';
import set from './images/settings.png';

export default class Header extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div class='Block-one'>
          <ul className='Menu-ul'>
            <li class='Menu-list'><img src={home} width='20px' className='Menu-img'/>首頁</li>
              <li class='Menu-list'><img src={user} width='20px' className='Menu-img'/>基本資料</li>
                <li class='Menu-list'><img src={edit} width='20px' className='Menu-img'/>編輯資料</li>
                <li class='Menu-list'><img src={set} width='20px' className='Menu-img'/>設定</li>
               </ul>
         </div>

      </div>
    );
  }
}
