import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
export default class ChangePassword extends Component {
    render() {
        return (
            <div className="Register">
                <div className="Register limiter">
                    <div className="Register container">
                        <div className="Register wrap" style={{ width: "600px" }}>
                            <form className="Register form">
                                <span className="Register title">
                                    修改密碼
                                    </span>
                                <span>
                                    請填寫你目前的密碼和驗證碼，以修改密碼：
                                    </span>
                                <div className="Register list">
                                    <span className="Register list-text">新密碼</span>
                                    <input className="Register input" type="text" />
                                </div>
                                <div className="Register list">
                                    <span className="Register list-text">新密碼確認</span>
                                    <input className="Register input" type="text" />
                                </div>
                                <div className="Register list">
                                    <span className="Register list-text">驗證碼</span>
                                    <input className="Register input" type="text" />
                                </div>
                                <Link to="/ChangePasswordComplete">
                                    <div className="Register list">
                                        <button className="Register login-btn">
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