import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Loging.css';
import { Link } from 'react-router-dom';
export default class Loging extends Component {
    render() {
        return (
            <div className="Loging">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap">
                            <form className="form">
                                <span className="title">
                                    登入
                                    </span>
                                <input className="input" type="text" placeholder="帳號" />
                                <input className="input" type="password" placeholder="密碼" />
                                <div className="text-right">
                                    <span className="txt1">
                                        忘記
                                        </span>
                                    <Link to="/Getpassword">
                                        <a href="#" className="txt2">
                                            帳號 / 密碼?
                                            </a>
                                    </Link>
                                </div>
                                <button className="btn">
                                    登入
                                    </button>
                                <div className="text-bottom">
                                    <span className="txt1">
                                        還沒有帳號嗎?
                                        </span>
                                    <Link to="/StudentRegister">
                                        <a href="" className="txt2">
                                            註冊
                                            </a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}