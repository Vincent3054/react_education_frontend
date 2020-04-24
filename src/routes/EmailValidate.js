import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
import Correctfrom from '../Assets/EmailValidate_check.png';
export default class EmailValidate extends Component {
    render() {
        return (
            <div className="Register">
                <div className="Register limiter">
                    <div className="Register container">
                        <div className="Register wrap" style={{ width: "600px" }}>
                            <form className="Register form">
                                <span className="Register title">
                                    註冊成功
                                    </span>
                                <div style={{ textAlign: "center", display: "block" }}>
                                    <img src={Correctfrom} alt="錯誤" title="Error" style={{ width: "140px" }} />
                                </div>
                                <div style={{ marginTop: "30px", textAlign: "center" }}>
                                    <span>
                                        恭喜您註冊成功!
                                        </span>
                                </div>
                                <Link to="/ChangePassword">
                                    <div className="Register list">
                                        <button className="Register login-btn">
                                            去修改密碼
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