import React, { Component } from 'react'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './index.scss'

export class index extends Component {
    render() {
        return (
            <div id="rank-point-container">
                <div className="header">
                    <p className="name">
                        Points to the next <span>{this.props.title}</span>
                    </p>
                    <div className="select-dropholder">
                        <div className="dropdown">
                            <p>English</p>
                        </div>
                        <ul className="menu">
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Bengali</li>
                        </ul>
                    </div>
                </div>
                <div className="progress-bar-container">
                    <CircularProgressbar
                        value={40}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: "#02BC77",
                            trailColor: "#4791FF",
                        })}
                    />       
                    <div className="value-container">
                        <p className="value">100</p>
                        <p className="description">
                            Points Needed
                        </p>
                    </div>             
                </div>
                <div className="point-container">
                    <div className="item">
                        <p className="title">Credit points gained</p>
                        <p className="point">34344</p>
                    </div>
                    <div className="item">
                        <p className="title">Actual rank</p>
                        {this.props.title === 'rank' &&
                            <p className="point">
                                <img src="./img/general/mentor.png" alt="mentor"/>
                                Mentor
                            </p>
                        }
                        {this.props.title === 'level' &&
                            <p className="point">
                                <img src="./img/general/APOLLO-rect.png" alt="mentor"/>
                                Elementary
                            </p>
                        }
                    </div>
                    <div className="item">
                        <p className="title">Actual rank</p>
                        {this.props.title === 'rank' &&
                        <p className="point">
                            <img src="./img/general/scholar.png" alt="mentor"/>
                            Scholar
                        </p>
                        }
                        {this.props.title === 'level' &&
                        <p className="point">
                            <img src="./img/general/APOLLO-rect.png" alt="mentor"/>
                            Intermediate
                        </p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default index
