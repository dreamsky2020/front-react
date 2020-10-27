import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import RecordTable from 'components/record_table'
import $ from "jquery";
import './index.scss'

export class index extends Component {
    componentDidMount() {
        var menus = document.getElementsByClassName("nav-item");
        for(let i=0; i<menus.length; i++) {
            if(menus[i].classList.contains('active')) {
                menus[i].classList.remove('active');
            }
        }
        menus[2].classList.add("active");

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
            <div id="dashboard-main-records">
                <div className="route-wrapper">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={true}/>
                        <div className="content">
                            <p className="page-title">Records</p>

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
                                        Level
                                    </div>
                                    <div className="image-container"
                                        style={{background: `url(./img/general/APOLLO-rect.png)`}}
                                    />
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Rank     
                                    </div>
                                    <div className="image-container"
                                        style={{background: `url(./img/general/scholar.png)`}}
                                    />
                                </div>
                                <div className="item">
                                    <div className="title">
                                        Credit Points
                                    </div>
                                    <div className="image-container"
                                        style={{background: `url(./img/icons/wallet.png)`}}
                                    />
                                </div>
                            </div>

                            <div className="table-body">
                                <div className="table-container">
                                    <div className="header">
                                        <p className="title">
                                            Highest number of message
                                        </p>
                                        <div className="select-dropholder">
                                            <div className="dropdown">
                                                <p>This day</p>
                                            </div>
                                            <ul className="menu">
                                                <li>Monday</li>
                                                <li>Tuesday</li>
                                                <li>Wednesday</li>
                                                <li>Thursday</li>
                                                <li>Friday</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <RecordTable />
                                </div>

                                <div className="table-container">
                                    <div className="header">
                                        <p className="title">
                                            highest Number of Credit Points
                                        </p>
                                    </div>
                                    <RecordTable />
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
