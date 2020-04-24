import React, { Component } from 'react';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
import Correctfrom from '../Assets/EmailValidate_check.png';
import Errorimg from '../Assets/EmailValidateError_check.png';
export default class EmailValidate extends Component {

    state = {
        validate: undefined,
    }

    componentDidMount() {
        const msg = "驗證成功";
        const status = msg === "驗證成功";
        this.setState({ validate: status });
    }

    render() {
        const { validate } = this.state;
        return (
            <div className="Register">
                <div className="limiter">
                    <div className="container">
                        <div className="wrap" style={{ width: "600px" }}>
                            <form className="form">
                                <span className="title">
                                    {validate ? "註冊成功" : "驗證失敗"}
                                </span>
                                <div style={{ textAlign: "center", display: "block" }}>
                                    {
                                        validate ?
                                            <img src={Correctfrom} alt="成功" title="Success" style={{ width: "140px" }} />
                                            :
                                            <img src={Errorimg} alt="錯誤" title="Error" style={{ width: "140px" }} />
                                    }
                                </div>
                                <div style={{ marginTop: "30px", textAlign: "center" }}>
                                    <span>
                                        {validate ? "恭喜您註冊成功!" : "驗證錯誤，請重新確認或再註冊!"}
                                    </span>
                                </div>
                                <Link to={validate ? "/Loging/ChangePassword" : "/Loging/ShigeyoriEmailValidate"}>
                                    <div className="list">
                                        <button className="login-btn">
                                            {validate ? "去修改密碼!" : "重寄驗證信"}
                                        </button>
                                    </div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}