import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
export default class ChangePassword extends Component {
    render() {
        return (
            <Layout >
                <div className="Register">
                    <div className="Register limiter">
                        <div className="Register container">
                            <div className="Register wrap" style={{ width:"600px"}}>
                                <form className="Register form">
                                    <span className="Register title">
                                        修改密碼
                                    </span>
                                    <span>
                                        請填寫你目前的密碼，以修改密碼：
                                    </span>
                                    <div className="Register list">
                                        <span className="Register list-text">舊帳號</span>
                                        <input className="Register input" type="text"  />
                                    </div>
                                    <div className="Register list">
                                        <span className="Register list-text">新密碼</span>
                                        <input className="Register input" type="text"  />
                                    </div>
                                    <div className="Register list">
                                        <span className="Register list-text">新密碼確認</span>
                                        <input className="Register input" type="text"  />
                                    </div>
                                    <div className="Register list">
                                        <button className="Register login-btn">
                                            修改密碼
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