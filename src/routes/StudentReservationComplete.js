import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Register.css';
import { Link } from 'react-router-dom';
import Correctfrom from '../Assets/EmailValidate_check.png';
export default class StudentReservationComplete extends Component {
    render() {
        return (
            <Layout >
                <div className="Register">
                    <div className="limiter">
                        <div className="container">
                            <div className="wrap" style={{ width: "600px" }}>
                                <form className="form">
                                    <span className="title">
                                        預約成功
                                    </span>
                                    <div style={{ textAlign: "center", display: "block" }}>
                                        <img src={Correctfrom} alt="錯誤" title="Error" style={{ width: "140px" }} />
                                    </div>
                                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                                        <span>
                                            恭喜您預約成功!
                                        </span>
                                    </div>
                                    <Link to="#">
                                        <div className="list">
                                            <button className="login-btn">
                                                回去查看
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