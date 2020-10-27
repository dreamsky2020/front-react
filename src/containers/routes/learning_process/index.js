import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import BarChart from 'components/bar_chart'
import AnswerLineChart from 'components/anwer_line_chart'
import RankChart from 'components/rank_doughnut_chart'
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
        menus[1].classList.add("active");

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
            <div id="dashboard-learning-progress">
                <div className="route-wrapper">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={true}/>
                           
                        <div className="content">
                            <p className="page-title">Learning Progress</p>
                            <div className="select-group">
                                <div className="select-dropholder">
                                    <div className="dropdown">
                                        <p>Select League</p>
                                    </div>
                                    <ul className="menu">
                                        <li>League 1</li>
                                        <li>League 2</li>
                                        <li>League 3</li>
                                        <li>League 4</li>
                                        <li>League 5</li>
                                    </ul>
                                </div>

                                <div className="select-dropholder">
                                    <div className="dropdown">
                                        <p>Select protector</p>
                                    </div>
                                    <ul className="menu">
                                        <li>protector 1</li>
                                        <li>protector 2</li>
                                        <li>protector 3</li>
                                        <li>protector 4</li>
                                        <li>protector 5</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="main-body">
                                <div className="bar-line-chart-container">
                                    <BarChart />
                                    <AnswerLineChart />
                                </div>
                                <div className="progress-container">
                                    <RankChart title="rank"/>
                                    <RankChart title="level"/>
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
