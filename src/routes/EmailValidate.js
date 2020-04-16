import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
import {Link} from 'react-router-dom';
export default class EmailValidate extends Component {
    render() {
        return (
            <Layout >
                <div className="Register">
                    <div className="Register limiter">
                        <div className="Register container">
                            <div className="Register wrap" style={{ width:"600px"}}>
                                <form className="Register form">
                                    <span className="Register title">
                                        註冊成功
                                    </span>
                                    <span>
                                        恭喜您註冊成功!
                                    </span>
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
            </Layout>
        );
    }
}