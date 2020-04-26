import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Personal.css';

// import Personal from '../components/Studenlist';

export default class Personal extends Component {
    static = {
        nane: "",


    }
    render() {

        return (
            <Layout>
                <div className="personal">
                    <div className="body">
                        <h1>個人資訊</h1>

                    </div>
                    <div className="main">
                        <div className="boxone">
                            <label>
                                <span className="font">姓名</span>
                            </label>
                            <input className="input" type="text" readonly="readonly" value="歐俞均" />
                        </div>
                        <div className="boxtwo">
                            <span className="font">聯絡電話</span>
                            <input className="input" type="text" readonly="readonly" value="0975019879" />
                        </div>
                        <div className="boxthree">
                            <span className="font">電子郵件</span>
                            <input className="input" type="text" readonly="readonly" value="s1310831014@gms.nutc.edu.tw" />
                        </div>
                        <div className="boxfour">
                            <span className="font">班級</span>
                            <input className="input" type="text" readonly="readonly" value="資管三A" />
                        </div>
                        <div className="boxfive">
                            <span className="font">班級代號</span>
                            <input className="input" type="text" readonly="readonly" value="301" />
                        </div>
                        <div className="boxsix">
                            <span className="font">性別</span>
                            <input className="radio" name="radio" type="radio" />
                            <label for="radio-2" className="radio-label">男</label>
                            <input className="radio" name="radio" type="radio" />
                            <label for="radio-2" className="radio-label">女</label>
                        </div>

                    </div>
                    <div className="btnsend">
                    <button className="button button5">儲存變更</button>
                    </div>
                </div>
            </Layout>
        );
    }
}