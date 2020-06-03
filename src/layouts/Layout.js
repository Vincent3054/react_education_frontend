import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import "../mixin/main.css";
import "./Layout.css";

export default class Layout extends Component {
  
  state = {
    userInfo: {}
  };

  componentDidMount() {
    // this.setState({
    //   showme: JSON.parse(localStorage.getItem("userinfo"))
    // }) //

  }
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Header />
        <Menu />
        <div className="content">{children}</div>
        <Footer />
      </div>
    );
  }
}
