import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Loging.css';
import { Link } from 'react-router-dom';
export default class Loging extends Component {
    render() {
        return (
            <div className="Loging">
                <div className="Loging limiter">
                    <div className="Loging container">
                        <div className="Loging wrap">
                            <form className="Loging form">
                                <span className="Loging title">
                                    登入
                                    </span>
                                <input className="Loging input" type="text" placeholder="帳號" />
                                <input className="Loging input" type="password" placeholder="密碼" />
                                <div className="Loging text-right">
                                    <span className="Loging txt1">
                                        忘記
                                        </span>
                                    <Link to="/Getpassword">
                                        <a href="#" className="Loging txt2">
                                            帳號 / 密碼?
                                            </a>
                                    </Link>
                                </div>
                                <button className="Loging btn">
                                    登入
                                    </button>
                                <div className="Loging text-bottom">
                                    <span className="Loging txt1">
                                        還沒有帳號嗎?
                                        </span>
                                    <Link to="/StudentRegister">
                                        <a href="" className="Loging txt2">
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