import React, { Component } from 'react';
import '../mixin/main.css';
import '../components/Card.css';
import ClassCard from '../Assets/1694.jpg';
export default class Card extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="Card>">
                <div className="Card row">
                    <div className="Card column">
                        <div className="Card cards">
                            <div className="Card card card--big">
                                <div className="card__image" ><img src={ClassCard} alt="錯誤" title="Error" style={{ width: "100%" ,height:"100%"}} /></div>
                                <h2 className="card__title">{data}</h2>
                                <p className="card__text">內文</p>
                                <div className="card__action-bar">
                                    <button className="card__button">操作一</button>
                                    <button className="card__button">操作二</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
