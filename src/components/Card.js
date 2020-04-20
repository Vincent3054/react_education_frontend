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
                                <div className="card__image" ><img src={ClassCard} alt="錯誤" title="Error" style={{ width: "100%", height: "100%" }} /></div>
                                <h2 className="card__title">{data}</h2>
                                <p className="card__text">班級代號<br/>0/10人</p>
                                <div className="card__action-bar">
                                    <div class="ph-float">
                                        <a href='#' class='ph-button ph-btn-green'>進入</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
