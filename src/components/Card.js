import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import '../mixin/main.css';
import '../routes/Card.css';
export default class Card extends Component {
    render() {
        const { data } = this.props;
        return (
            <Layout>
                <div className="Card>">
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{data}</h3>
                                    <p>Some text</p>
                                    <p>Some text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
