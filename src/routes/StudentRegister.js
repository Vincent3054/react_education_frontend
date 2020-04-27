import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
export default class StudentRegister extends Component {
    render() {
        return (
            <div className="Register">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap">
                            <form className="form">
                                <span className="title">
                                    學生註冊
                                    </span>
                                <div className="list" >
                                    <span className="red-dot">*</span>
                                    <span className="list-text">性別</span>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">男</label>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">女</label>
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">真實姓名</span>
                                    <input className="input" type="text" />
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">帳號</span>
                                    <input className="input" type="text" />
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">密碼</span>
                                    <input className="input" type="password" />
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">電子信箱</span>
                                    <input className="input" type="email" />
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">連絡電話</span>
                                    <input className="input" type="tel" />
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">入學年度</span>
                                    <select className="input">
                                        <option></option>
                                        <option value="2040">2040</option><option value="2039">2039</option><option value="2038">2038</option> <option value="2037">2037</option><option value="2036">2036</option><option value="2035">2035</option><option value="2034">2034</option><option value="2033">2033</option><option value="2032">2032</option><option value="2031">2031</option><option value="2030">2030</option><option value="2029">2029</option><option value="2028">2028</option><option value="2027">2027</option><option value="2026">2026</option><option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option>
                                    </select>
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">班級代號</span>
                                    <select className="input">
                                        <option></option>
                                        <option value="C101">C101</option><option value="C102">C102</option><option value="C103">C103</option><option value="C104">C104</option><option value="C105">C105</option><option value="C106">C106</option><option value="C107">C107</option><option value="C108">C108</option><option value="C109">C109</option><option value="C110">C110</option>
                                    </select>
                                </div>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">班級</span>
                                    <select className="input">
                                        <option></option>
                                        <option value="資訊班">資訊班</option><option value="藝術班">資訊班</option><option value="普通班">普通班</option><option value="A班">A班</option><option value="B班">B班</option><option value="C班">C班</option><option value="D班">D班</option>
                                    </select>
                                </div>
                                <Link to="/Loging/Register/Complete">
                                    <div className="list">
                                        <button className="login-btn">
                                            註冊
                                        </button>
                                    </div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}