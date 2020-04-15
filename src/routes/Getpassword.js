import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
export default class Getpassword extends Component {
    render() {
        return (
            <Layout >
                <div className="Register">
                    <div className="Register limiter">
                        <div className="Register container">
                            <div className="Register wrap" style={{ width:"600px"}}>
                                <form className="Register form">
                                    <span className="Register title">
                                        找回密碼
                                    </span>
                                    <span>
                                        請填寫你註冊時所認證的Email和帳號，以查詢密碼：
                                    </span>
                                    <div className="Register list">
                                        <span className="Register red-dot">*</span>
                                        <span className="Register list-text">帳號</span>
                                        <input className="Register input" type="text" name="user_id" />
                                    </div>
                                    <div className="Register list">
                                        <span className="Register red-dot">*</span>
                                        <span className="Register list-text">電子信箱</span>
                                        <input className="Register input" type="text" name="user_email" />
                                    </div>
                                    <div className="Register list">
                                        <button className="Register login-btn">
                                            查詢
                                        </button>
                                    </div>
                                    <hr></hr>
                                    <div style={{marginTop: "40px",marginBottom: "40px"}}>
                                        <span>
                                            查詢結果會將您的帳號與密碼，寄至你填寫的Email信箱，請在15分鐘內，點擊Email中的網址來找回密碼。
                                        </span>
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