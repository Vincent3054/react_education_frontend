import React, { Component } from 'react';
import '../mixin/main.css';
import './Header.css';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
  render() {
    return (
      <div className="header main">
        <div className="header Navbar">
          <div className="header Navbar-logo">
            <span>logo</span>
          </div>
          <div className="header Navbar-login">
            <Link to="/Loging">
              <div> 登入/註冊</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
