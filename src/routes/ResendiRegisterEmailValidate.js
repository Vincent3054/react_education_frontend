import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
export default class ResendiRegisterEmailValidate extends Component {
    render() {
        return (
            <div className="Register">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap" style={{ width: "600px" }}>
                            <form className="form">
                                <span className="title">
                                    重寄驗證信
                                    </span>
                                <span>
                                    請重新填寫您的Email，以重寄認證信：
                                    </span>
                                <div className="list">
                                    <span className="list-text">電子信箱</span>
                                    <input className="input" type="mail" />
                                </div>
                                <div className="list">
                                    <button className="login-btn">
                                        送出
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}