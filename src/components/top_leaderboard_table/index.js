import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

export class index extends Component {
    render() {
        return (
            <div id="leader-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>position</th>
                            <th>player name</th>
                            <th>correct answers</th>
                            <th>incorrect answers</th>
                            <th>credit points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="contained-tr">
                            <td>
                                <img src='./img/icons/small-cup.png' alt="cup" />
                                <span>1</span>
                            </td>
                            <td>Jhone Doe</td>
                            <td>
                                <div>120</div>
                            </td>
                            <td>
                                <div>36</div>
                            </td>
                            <td>234</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src='./img/icons/small-cup.png' alt="cup" />
                                <span>2</span>
                            </td>
                            <td>Doe jin</td>
                            <td><div>110</div></td>
                            <td><div>34</div></td>
                            <td>230</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src='./img/icons/small-cup.png' alt="cup" />
                                <span>3</span>
                            </td>
                            <td>Jenis</td>
                            <td>
                                <div>90</div>
                            </td>
                            <td>
                                <div>24</div>
                            </td>
                            <td>225</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src='./img/icons/small-cup.png' alt="cup" />
                                <span>4</span>
                            </td>
                            <td>Doe jenis</td>
                            <td><div>80</div></td>
                            <td><div>20</div></td>
                            <td>210</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src='./img/icons/small-cup.png' alt="cup" />
                                <span>5</span>
                            </td>
                            <td>Jhone Doe</td>
                            <td>
                                <div>70</div>
                            </td>
                            <td>
                                <div>18</div>
                            </td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="contained-tr">
                            <td>
                                <img src='./img/icons/small-cup.png' alt="cup" />
                                <span>6</span>
                            </td>
                            <td>Doe jin</td>
                            <td><div>60</div></td>
                            <td><div>16</div></td>
                            <td>180</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(index)
