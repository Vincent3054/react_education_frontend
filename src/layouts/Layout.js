import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import '../mixin/main.css';
import './Layout.css';


export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Header />
        <Menu />
        <div className="content">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
