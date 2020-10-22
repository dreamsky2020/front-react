import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './index.scss'

export class index extends Component {
    render() {
        return (
            <div id="dashboar-record-card">
                <div className="header">
                    <div className="vs-language">
                        <span>league : </span>
                        <img src="./img/general/Bengali.png" alt="bengali" />
                        <span>english</span>
                    </div>
                    <Link to="/">view more</Link>
                </div>
                <div className="card-body">
                    <div className="item">
                        <div>
                            <img src="./img/icons/award.png" alt="award" />
                            <span>level</span>
                        </div>
                        <div>intermediate</div>
                    </div>
                    <div className="item">
                        <div>
                            <img src="./img/icons/rank.png" alt="rank" />
                            <span>rank</span>
                        </div>
                        <div>mentor</div>
                    </div>
                    <div className="item">
                        <div>
                            <img src="./img/icons/position.png" alt="position" />
                            <span>position</span>
                        </div>
                        <div>34</div>
                    </div>
                    <div className="item">
                        <div>
                            <img src="./img/icons/message.png" alt="message" />
                            <span>message</span>
                        </div>
                        <div>367</div>
                    </div>
                    <div className="item">
                        <div>
                            <img src="./img/icons/credit-point.png" alt="credit point" />
                            <span>credit points</span>
                        </div>
                        <div>2067</div>
                    </div>                                    
                </div>
            
            </div>
        )
    }
}

export default withRouter(index)
