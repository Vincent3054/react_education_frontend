import React, { Component } from 'react';
import './Header.css';


export default class Menu extends Component {
  render() {
    return (
      <div className='header'>
        <div className='Navbar'>
          <div className='Navbar-login'>
            <div> 登入/註冊</div>
          </div>
        </div>
      </div>
    );
  }
}
