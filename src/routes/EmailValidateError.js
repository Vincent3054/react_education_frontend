import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
import Errorimg from '../Assets/EmailValidateError_check.png';
export default class EmailValidateError extends Component {
    render() {
        return (
            <Layout >
                <div className="Register">
                    <div className="Register limiter">
                        <div className="Register container">
                            <div className="Register wrap" style={{ width: "600px" }}>
                                <form className="Register form">
                                    <span className="Register title">
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
                                    <Link to="/Register">
                                        <div className="Register list">
                                            <button className="Register login-btn">
                                                去註冊
                                            </button>
                                        </div>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}