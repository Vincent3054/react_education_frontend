import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import '../routes/StudentReservation.css';
import { Link } from 'react-router-dom';
export default class StudentReservation extends Component {
    render() {
        return (
            <div className="StudentReservation">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap">
                            <form className="form">
                                <span className="title">
                                    預約
                                    </span>
                                <div className="list">
                                    <span className="list-text">真實姓名：</span>
                                    <span>陳小明</span>
                                </div>
                                <div className="list">
                                    <span className="list-text">電子信箱：</span>
                                    <span>a12345678@gmail.com</span>
                                </div>

                                <div className="list">
                                    <span className="list-text">班級：</span>
                                    <span>A班</span>
                                </div>
                                <div className="list">
                                    <span className="list-text">班級代號：</span>
                                    <span>C101</span>
                                </div>
                                <div className="list">
                                    <span className="list-text">性別：</span>
                                    <span>男</span>
                                </div>
                                <div className="list">
                                    <span className="list-text">連絡電話：</span>
                                    <span>0921730662</span>
                                </div>

                                <div className="list">
                                    <span className="list-text">＊預約日期：</span>
                                    <input className="input" type="date"></input>
                                </div>
                                <div className="list">
                                    <span className="list-text">＊預約時段：</span>
                                    <select className="input">
                                        <option></option>
                                        <option value="早上">早上</option><option value="中午">中午</option><option value="下午">下午</option><option value="晚上">晚上</option>
                                    </select>
                                </div>
                                <div className="list">
                                    <span className="list-text">預約時間：</span>
                                    <input className="input" type="time"></input>
                                </div>
                                <div className="list">
                                    <span className="list-text">諮詢類別：</span>
                                    <input className="input" type="text" />
                                </div>
                                <div className="list">
                                    <span className="list-text">＊諮詢內容：</span>
                                    <textarea className="input" style={{ height: "100px" }}></textarea>
                                </div>
                                <div className="list">
                                    <Link to="/StudentReservationComplete">
                                        <button className="login-btn">
                                            預約
                                            </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


/*

                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">男</label>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">女</label>
 */