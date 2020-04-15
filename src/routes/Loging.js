import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import './Index.css';
import '../routes/Loging.css';
import '../mixin/main.css';
export default class Loging extends Component {
    render() {
        return ( 
            <Layout >
                <div className="limiter">
                    <div className="container">
                        <div className="wrap">
                            <form className="form">

                                <span className="title">
                                    Sign In
                                </span>

                                <input className="input" type="text" name="username" placeholder="Username"/>
                                <input className="input" type="password" name="pass" placeholder="Password"/>
                                
                                <div className="text-right">
                                    <span className="txt1">
                                        忘記
                                    </span>
                                    <a href="#" className="txt2">
                                        帳號 / 密碼?
                                    </a>
                                </div>
            
                                <button className="login-btn">
                                    登入
                                </button>
            
                                <div className="text-bottom">
                                    <span className="txt1">
                                        還沒有帳號嗎?
                                    </span>
                                    <a href="#" className="txt2">
                                        註冊
                                    </a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}