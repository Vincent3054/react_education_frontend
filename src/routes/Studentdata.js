import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Studentdata.css';
import Studenlist from '../components/Studenlist';

export default class Studentdata extends Component {
    render() {

        return (
            <Layout>
                <div className="Studentdata-body">
                    <div>
                        <div>
                           <Studenlist /> 
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}