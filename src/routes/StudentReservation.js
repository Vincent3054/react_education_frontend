import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import '../routes/StudentReservation.css';
import { Link } from 'react-router-dom';
export default class StudentReservation extends Component {
    render() {
        return (
            <div className="StudentReservation Register">
                <div className="StudentReservation limiter">
                    <div className="StudentReservation container">
                        <div className="StudentReservation wrap">
                            <form className="StudentReservation form">
                                <span className="StudentReservation title">
                                    預約
                                    </span>
                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">真實姓名：</span>
                                    <span>陳小明</span>
                                </div>
                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">電子信箱：</span>
                                    <span>a12345678@gmail.com</span>
                                </div>

                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">班級：</span>
                                    <span>A班</span>
                                </div>
                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">班級代號：</span>
                                    <span>C101</span>
                                </div>
                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">性別：</span>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">男</label>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">女</label>
                                </div>
                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">連絡電話：</span>
                                    <input className="StudentReservation input" type="text" />
                                </div>

                                <div className="StudentReservation list">
                                    <span className="Register list-text">預約日期</span>
                                    <input className="StudentReservation input" type="date"></input>
                                </div>
                                <div className="StudentReservation list">
                                    <span className="Register list-text">預約時間</span>
                                    <input className="StudentReservation input" type="time"></input>
                                </div>
                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">諮詢類別</span>
                                    <select className="StudentReservation input">
                                        <option></option>
                                        <option value="學業">學業</option><option value="家庭">家庭</option><option value="感情">感情</option><option value="其他">其他</option>     </select>
                                </div>
                                <div className="StudentReservation list">
                                    <span className="StudentReservation list-text">諮詢內容</span>
                                    <textarea className="StudentReservation input" style={{ height: "100px" }}></textarea>
                                </div>
                                <div className="StudentReservation list">
                                    <Link to="/StudentReservationComplete">
                                        <button className="StudentReservation login-btn">
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
