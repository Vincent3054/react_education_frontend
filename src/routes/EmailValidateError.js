import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
import {Link} from 'react-router-dom';
export default class EmailValidateError extends Component {
    render() {
        return (
            <Layout >
                <div className="Register">
                    <div className="Register limiter">
                        <div className="Register container">
                            <div className="Register wrap" style={{ width:"600px"}}>
                                <form className="Register form">
                                    <span className="Register title">
                                        驗證失敗
                                    </span>
                                    <span>
                                        驗證錯誤，請重新確認或再註冊!
                                    </span>
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