import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import RankTable from 'components/rank_table'
import $ from "jquery"
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

        $(".dropdown").click(function(){
            $(this).next(".menu").toggleClass("showSelectMenu");

            $(".menu > li").click(function(){
                $(this).closest(".select-dropholder").children(".dropdown").find("p").html($(this).html());
                $(".menu").removeClass("showSelectMenu");
            });
        });
    }

    render() {
        return (
            <div id="dashboard-main-ranks">
                <div className="route-wrapper">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={true}/>
                        <div className="content">
                            <p className="page-title">Rank</p>

                            <div className="header-select-class">
                                <div className="select-dropholder">
                                    <div className="dropdown">
                                        <p>Select Class</p>
                                    </div>
                                    <ul className="menu">
                                        <li>Class 1</li>
                                        <li>Class 2</li>
                                        <li>Class 3</li>
                                        <li>Class 4</li>
                                        <li>Class 5</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="main-records-value">
                                <div className="item">
                                    <div className="title">
                                        Current Rank
                                    </div>
                                    <div className="value">
                                        2
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Current level     
                                    </div>
                                    <div className="value">
                                        5
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Credit Points
                                    </div>
                                    <div className="value">
                                        200
                                    </div>
                                </div>
                            </div>

                            <div className="table-body">
                                <p className="title">
                                    TOP 50 Rankers
                                </p>
                                <div className="table-container">
                                    <RankTable 
                                        header={false}
                                        tournament={true}
                                    />
                                </div>

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
