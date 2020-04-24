import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
import Errorimg from '../Assets/EmailValidateError_check.png';
export default class EmailValidateError extends Component {
    render() {
        return (
            <div className="Register">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap" style={{ width: "600px" }}>
                            <form className="form">
                                <span className="title">
                                    驗證失敗
                                    </span>
                                <div style={{ textAlign: "center", display: "block" }}>
                                    <img src={Errorimg} alt="錯誤" title="Error" style={{ width: "140px" }} />
                                </div>
                                <div style={{ marginTop: "30px", textAlign: "center" }}>
                                    <span>
                                        驗證錯誤，請重新確認或再註冊!
                                        </span>
                                </div>
                                <Link to="/ShigeyoriEmailValidate">
                                    <div className="list">
                                        <button className="login-btn">
                                            重寄驗證信
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