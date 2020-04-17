import React, { Component } from 'react';
import '../mixin/main.css';
import '../components/Card.css';
export default class Card extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="Card>">
                <div className="Card row">
                    <div className="Card column">
                        <div className="Card card">
                            <div className="Card card-body">
                                <h3>{data}</h3>
                                <p>Some text</p>
                                <p>Some text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
