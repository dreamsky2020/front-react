import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './index.scss'

export class index extends Component {
    render() {
        return (
            <div id="main-record-table">
                <table>
                    <thead>
                        <tr>
                            <th>rank</th>
                            <th>date</th>
                            <th>league</th>
                            <th>no. of message</th>
                            <th>history</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="contained-tr">
                            <td>
                                <img src="./img/general/mentor.png" alt="mentor" />
                            </td>
                            <td>Thu, 26 Oct</td>
                            <td>English</td>
                            <td>200</td>
                            <td><Link to="/">View</Link></td>
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
                                <img src="./img/general/scholar.png" alt="scholar" />
                            </td>
                            <td>Thu, 26 Oct</td>
                            <td>Hindi</td>
                            <td>200</td>
                            <td><Link to="/">View</Link></td>
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
                                <img src="./img/general/scholar.png" alt="scholar" />
                            </td>
                            <td>Thu, 26 Oct</td>
                            <td>Bangali</td>
                            <td>200</td>
                            <td><Link to="/">View</Link></td>
                        </tr>                                   
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(index)
