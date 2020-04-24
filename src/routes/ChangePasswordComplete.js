import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
import Correctfrom from '../Assets/EmailValidate_check.png';
export default class ChangePasswordComplete extends Component {
    render() {
        return (
                <div className="Register">
                    <div className="Register limiter">
                        <div className="Register container">
                            <div className="Register wrap" style={{ width: "600px" }}>
                                <form className="Register form">
                                    <span className="Register title">
                                        修改成功
                                    </span>
                                    <div style={{ textAlign: "center", display: "block" }}>
                                        <img src={Correctfrom} alt="錯誤" title="Error" style={{ width: "140px" }} />
                                    </div>
                                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                                        <span>
                                            恭喜您修改成功!
                                        </span>
                                    </div>
                                    <Link to="/Loging">
                                        <div className="Register list">
                                            <button className="Register login-btn">
                                                去登入
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