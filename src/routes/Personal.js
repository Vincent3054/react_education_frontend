import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Personal.css';

// import Personal from '../components/Studenlist';

export default class Personal extends Component {
    render() {

        return (
            <Layout>
                <div className="personal body">
                    <h1>個人資訊</h1>
                    <span>您在 Google 服務使用的基本資訊 (例如姓名和相片</span>

                </div>
                <div className="personal main">

                </div>



            </Layout>
        );
    }
}