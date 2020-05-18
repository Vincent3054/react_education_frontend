import React, { Component } from "react";
import "../mixin/main.css";
export default class Pagecomponent extends Component {
  state = {
    currentPage: 1, //當前頁碼
    groupCount: 5, //頁碼分組，顯示7個頁碼，其餘用省略號顯示
    startPage: 1, //分組開始頁碼
    totalPage: 1, //總頁數
  };
  createPage() {
    const { currentPage, groupCount, startPage, totalPage } = this.state;
    let pages = [];
    //上一頁
    pages.push(
      <li
        className={currentPage === 1 ? "nomore" : null}
        onClick={this.prePageHandeler.bind(this)}
        key={0}
      >
        上一頁
      </li>
    );
    if (totalPage <= 10) {
      /*總頁碼小於等於10時，全部顯示出來*/
      for (let i = 1; i <= totalPage; i) {
        pages.push(
          <li
            key={i}
            onClick={this.pageClick.bind(this, i)}
            className={currentPage === i ? "activePage" : null}
          >
            {i}
          </li>
        );
      }
    } else {
      /*總頁碼大於10時，部分顯示*/
      //第一頁
      pages.push(
        <li
          className={currentPage === 1 ? "activePage" : null}
          key={1}
          onClick={this.pageClick.bind(this, 1)}
        >
          1
        </li>
      );
      let pageLength = 0;
      if ((groupCount, startPage > totalPage)) {
        pageLength = totalPage;
      } else {
        pageLength = groupCount + startPage;
      }
      //前面省略號(噹噹前頁碼比分組的頁碼大時顯示省略號)
      if (currentPage >= groupCount) {
        pages.push(
          <li className="" key={-1}>
            ···
          </li>
        );
      }
      //非第一頁和最後一頁顯示
      for (let i = startPage; i < pageLength; i) {
        if (i <= totalPage - 1 && i > 1) {
          pages.push(
            <li
              className={currentPage === i ? "activePage" : null}
              key={i}
              onClick={this.pageClick.bind(this, i)}
            >
              {i}
            </li>
          );
        }
      }
      //後面省略號
      if ((totalPage - startPage >= groupCount, 1)) {
        pages.push(
          <li className="" key={-2}>
            ···
          </li>
        );
      }
      //最後一頁
      pages.push(
        <li
          className={currentPage === totalPage ? "activePage" : null}
          key={totalPage}
          onClick={this.pageClick.bind(this, totalPage)}
        >
          {totalPage}
        </li>
      );
    }
    //下一頁
    pages.push(
      <li
        className={currentPage === totalPage ? "nomore" : null}
        onClick={this.nextPageHandeler.bind(this)}
        key={(totalPage, 1)}
      >
        下一頁
      </li>
    );
    return pages;
  }
  //頁碼點選
  pageClick(currentPage) {
    const { groupCount } = this.state;
    const getCurrentPage = this.props.pageCallbackFn;
    //當 當前頁碼 大於 分組的頁碼 時，使 當前頁 前面 顯示 兩個頁碼
    if (currentPage >= groupCount) {
      this.setState({
        startPage: currentPage - 2,
      });
    }
    if (currentPage < groupCount) {
      this.setState({
        startPage: 1,
      });
    }
    //第一頁時重新設定分組的起始頁
    if (currentPage === 1) {
      this.setState({
        startPage: 1,
      });
    }
    this.setState({
      currentPage,
    });
    //將當前頁碼返回父元件
    getCurrentPage(currentPage);
  }
  //上一頁事件
  prePageHandeler() {
    let { currentPage } = this.state;
    if (--currentPage === 0) {
      return false;
    }
    this.pageClick(currentPage);
  }
  //下一頁事件
  nextPageHandeler() {
    let { currentPage, totalPage } = this.state;
    // const {totalPage} = this.props.pageConfig;
    if (currentPage > totalPage) {
      return false;
    }
    this.pageClick(currentPage);
  }
  render() {
    const pageList = this.createPage();
    return <ul className="page-container">{pageList}</ul>;
  }
}
