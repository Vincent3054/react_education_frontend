import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
export default class Register extends Component {
    render() {
        return ( 
            <Layout >
            <div className="Register">
                <div className="Register limiter">
                    <div className="Register container">
                        <div className="Register wrap">
                            <form className="Register form">
                                <span className="Register title">
                                    Sign Up
                                </span>
                                <div className="Register list">
                                    <span className="Register red-dot">*</span>
                                    <span className="Register list-text">真實姓名</span>
                                    <input className="Register input" type="text" name="user_name"/>
                                </div>
                                <div className="Register list">
                                    <span className="Register red-dot">*</span>
                                    <span className="Register list-text">帳號</span>
                                    <input className="Register input" type="text"  name="user_id"/>
                                </div>
                                <div className="Register list">
                                    <span className="Register red-dot">*</span>
                                    <span className="Register list-text">密碼</span>
                                    <input className="Register input" type="password"  name="user_pass"/>
                                </div>
                                <div className="Register list">
                                    <span className="Register red-dot">*</span>
                                    <span className="Register list-text">電子信箱</span>
                                    <input className="Register input" type="text"  name="user_email"/>
                                </div>
                                <div className="Register list">
                                    <span className="Register red-dot">*</span>
                                    <span className="Register list-text">員工編號</span>
                                    <input className="Register input" type="text"  name="user_M_id"/>
                                </div>
                                <div className="Register list">
                                    <button className="Register login-btn">
                                        註冊
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