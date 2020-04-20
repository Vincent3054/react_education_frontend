import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import './Studentdata.css';

import Studenlist from '../components/Studenlist';

export default class information extends Component {
    render() {

        return (
            <Layout>
                <div className="Studentdata-body">
                    
                    <div>
                        
                           <Studenlist/>
                    </div>
                </div>
            </Layout>
        );
    }
}