import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Personal.css';
import user from '../Assets/user.png';

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
                        <div className="user">
                            <img src={user} className="userimg" />
                        </div>
                        <div className="content">
                            <div className="boxone">
                                <span className="font">姓名</span>
                                <span className="font">：</span>
                                <span className="font">歐俞均</span>
                            </div>
                            <div className="boxtwo">
                                <span className="font">聯絡電話</span>
                                <span className="font">：</span>
                                <span className="font">0975019879</span>
                            </div>
                            <div className="boxthree">
                                <span className="font">電子郵件</span>
                                <span className="font">：</span>
                                <span className="font">ouyujyun@gmail.com</span>
                            </div>
                            <div className="boxfour">
                                <span className="font">班級</span>
                                <span className="font">：</span>
                                <span className="font">資管三A</span>
                            </div>
                            <div className="boxfive">
                                <span className="font">班級代號</span>
                                <span className="font">：</span>
                                <span className="font">101</span>
                            </div>
                            <div className="boxsix">
                                <span className="font">性別</span>
                                <span className="font">：</span>
                                <span className="font">女</span>
                            </div>
                        </div>

                    </div>

                </div>
            </Layout>
        );
    }
}
//    <div className="btnsend">
//                     <button className="button button5">儲存變更</button>
//                     </div>