import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './index.scss'


export class index extends Component {
    render() {
        return (
            <div className="table-scroll-container">
                {this.props.header &&
                    <div className="header">
                        <p className="title">
                            highest Number of message
                        </p>
                    </div>
                }
                <table className="language-rank-table">
                    <thead>
                        <tr>
                            <th>league</th>
                            <th>position</th>
                            <th>rank</th>
                            <th>no. of points</th>
                            <th>history</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="contained-tr">
                            <td>
                                <img src="./img/general/English.png" alt="english" />
                            </td>
                            <td>
                                <div className="success">
                                    <span className="amount">34</span>
                                    <span>+2 Fortunas</span>
                                    <p>
                                        <i className="fa fa-arrow-up"></i>
                                    </p>
                                </div>
                            </td>
                            <td>Mentor</td>
                            <td>200</td>
                            <td>
                                {this.props.tournament ? 
                                    (<Link to="/tournament-result">View Results</Link>)
                                    :
                                    (<Link to="/">See top 50</Link>)
                                }
                            </td>
                        </tr>
                        <tr className="empty-tr">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src="./img/general/English.png" alt="english" />
                            </td>
                            <td>
                                <div className="warning">
                                    <span className="amount">34</span>
                                    <span>-3 Fortunas</span>
                                    <p>
                                        <i className="fa fa-arrow-down"></i>
                                    </p>
                                </div>
                            </td>
                            <td>Guru</td>
                            <td>200</td>
                            <td>
                                {this.props.tournament ? 
                                    (<Link to="/tournament-result">View Results</Link>)
                                    :
                                    (<Link to="/">See top 50</Link>)
                                }
                            </td>
                        </tr>
                        <tr className="empty-tr">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src="./img/general/English.png" alt="english" />
                            </td>
                            <td>
                                <div className="success">
                                    <span className="amount">20</span>
                                    <span>+5 Fortunas</span>
                                    <p>
                                        <i className="fa fa-arrow-up"></i>
                                    </p>
                                </div>
                            </td>
                            <td>Mentor</td>
                            <td>200</td>
                            <td>
                                {this.props.tournament ? 
                                    (<Link to="/tournament-result">View Results</Link>)
                                    :
                                    (<Link to="/">See top 50</Link>)
                                }
                            </td>
                        </tr>      
                        <tr className="empty-tr">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src="./img/general/English.png" alt="english" />
                            </td>
                            <td>
                                <div className="warning">
                                    <span className="amount">34</span>
                                    <span>-3 Fortunas</span>
                                    <p>
                                        <i className="fa fa-arrow-down"></i>
                                    </p>
                                </div>
                            </td>
                            <td>Guru</td>
                            <td>200</td>
                            <td>
                                {this.props.tournament ? 
                                    (<Link to="/tournament-result">View Results</Link>)
                                    :
                                    (<Link to="/">See top 50</Link>)
                                }
                            </td>
                        </tr>
                        <tr className="empty-tr">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src="./img/general/English.png" alt="english" />
                            </td>
                            <td>
                                <div className="success">
                                    <span className="amount">20</span>
                                    <span>+5 Fortunas</span>
                                    <p>
                                        <i className="fa fa-arrow-up"></i>
                                    </p>
                                </div>
                            </td>
                            <td>Mentor</td>
                            <td>200</td>
                            <td>
                                {this.props.tournament ? 
                                    (<Link to="/tournament-result">View Results</Link>)
                                    :
                                    (<Link to="/">See top 50</Link>)
                                }
                            </td>
                        </tr>      
                        <tr className="empty-tr">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src="./img/general/English.png" alt="english" />
                            </td>
                            <td>
                                <div className="warning">
                                    <span className="amount">34</span>
                                    <span>-3 Fortunas</span>
                                    <p>
                                        <i className="fa fa-arrow-down"></i>
                                    </p>
                                </div>
                            </td>
                            <td>Guru</td>
                            <td>200</td>
                            <td>
                                {this.props.tournament ? 
                                    (<Link to="/tournament-result">View Results</Link>)
                                    :
                                    (<Link to="/">See top 50</Link>)
                                }
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter( index )
