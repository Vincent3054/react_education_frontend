import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
export default class ChangePassword extends Component {
    render() {
        return (
            <div className="Register">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap" style={{ width: "600px" }}>
                            <form className="form">
                                <span className="title">
                                    修改密碼
                                    </span>
                                <span>
                                    請填寫你目前的密碼和驗證碼，以修改密碼：
                                    </span>
                                <div className="list">
                                    <span className="list-text">新密碼</span>
                                    <input className="input" type="text" />
                                </div>
                                <div className="list">
                                    <span className="list-text">新密碼確認</span>
                                    <input className="input" type="text" />
                                </div>
                                <div className="list">
                                    <span className="list-text">驗證碼</span>
                                    <input className="input" type="text" />
                                </div>
                                <Link to="/ChangePasswordComplete">
                                    <div className="list">
                                        <button className="login-btn">
                                            修改密碼
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