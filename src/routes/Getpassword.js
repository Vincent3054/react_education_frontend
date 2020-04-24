import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
export default class Getpassword extends Component {
    render() {
        return (
            <div className="Register">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap" style={{ width: "600px" }}>
                            <form className="form">
                                <span className="title">
                                    找回密碼
                                    </span>
                                <span>
                                    請填寫你註冊時所認證的Email，以查詢密碼：
                                </span>
                                <div className="list">
                                    <span className="red-dot">*</span>
                                    <span className="list-text">電子信箱</span>
                                    <input className="input" type="mail" />
                                </div>
                                <div className="list">
                                    <button className="login-btn">
                                        查詢
                                        </button>
                                </div>
                                <hr></hr>
                                <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                                    <span>
                                        查詢結果會將您的帳號與密碼，寄至你填寫的Email信箱，請在5分鐘內，點擊Email中的網址來找回密碼。
                                        </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}