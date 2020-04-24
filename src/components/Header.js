import React, { Component } from 'react';
import '../mixin/main.css';
import './Header.css';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
  render() {
    return (
      <div className="header">
        <div className="Navbar">
          <div className="Navbar-logo">
            <span>logo</span>
          </div>
          <div className="Navbar-login">
            <Link to="/Loging">
              登入/註冊
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
