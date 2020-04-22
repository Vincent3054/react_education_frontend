import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
export default class ShigeyoriEmailValidate extends Component {
    render() {
        return (
            <Layout >
                <div className="Register">
                    <div className="Register limiter">
                        <div className="Register container">
                            <div className="Register wrap" style={{ width: "600px" }}>
                                <form className="Register form">
                                    <span className="Register title">
                                        重寄驗證信
                                    </span>
                                    <span>
                                        請重新填寫您的Email，以重寄認證信：
                                    </span>
                                    <div className="Register list">
                                        <span className="Register list-text">電子信箱</span>
                                        <input className="Register input" type="mail" />
                                    </div>
                                    <div className="Register list">
                                        <button className="Register login-btn">
                                            送出
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}