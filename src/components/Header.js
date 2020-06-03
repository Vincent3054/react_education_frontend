import React, { Component } from "react";
import "../mixin/main.css";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  logout = () =>{
    localStorage.clear("token");
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="header">
        <div className="Navbar">
          <div className="Navbar-logo">
            <span>logo</span>
          </div>
          <div className="Navbar-login">
          
          <button type="button" className="btnout" onClick={() => this.logout()}><Link to="/Loging">登出</Link></button>
          </div>
        </div>
      </div>
    );
  }
}
