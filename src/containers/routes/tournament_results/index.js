import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import LeaderTable from 'components/top_leaderboard_table'
import './index.scss'

export class index extends Component {
    componentDidMount() {
        var menus = document.getElementsByClassName("nav-item");
        for(let i=0; i<menus.length; i++) {
            if(menus[i].classList.contains('active')) {
                menus[i].classList.remove('active');
            }
        }
        menus[5].classList.add("active");
    }

    render() {
        return (
            <div id="dashboard-tournament-result">
                <div className="route-wrapper">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={true}/>
                        <div className="content">
                            <p className="page-title">Tournament Results</p>
                            
                            <div className="header-section">
                                <div className="item">
                                    <p className="big-text">
                                        Tournament League
                                    </p>
                                    <p className="small-text">
                                        English
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="big-text">
                                        Tournament Type
                                    </p>
                                    <p className="small-text">
                                        Africa
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="big-text">
                                        Tournament level
                                    </p>
                                    <p className="small-text">
                                        Elementary
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="big-text">
                                        Tournament duration
                                    </p>
                                    <p className="small-text">
                                        45min
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="big-text">
                                        Tournament starting date
                                    </p>
                                    <p className="small-text">
                                        12.2.2012 23:45 GMT
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="big-text">
                                        Tournament Awarded
                                    </p>
                                    <p className="small-text">
                                        Top 3 users
                                    </p>
                                </div>

                                <img className="cup-background" src="./img/general/cup.png" alt="cup" />
                            </div>

                            <div className="table-container">
                                <p className="table-title">
                                    Top 20 leaderboard
                                </p>
                                <LeaderTable />
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(index)
