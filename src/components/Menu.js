import React, { Component } from 'react';
import './Menu.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div class='Block-one'>
        <div className='logo'>
        <span>logo</span>
        </div>
        <hr />
          <ul>
            <li class='Menu-list'>首頁</li>
              <li class='Menu-list'>發燒影片</li>
                <li class='Menu-list'>訂閱內容</li>
               </ul>
         </div>

      </div>
    );
  }
}
